import { NextRequest, NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';
import { getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ACTIVE_WINDOW_MS = 90_000;
const STATS_COLLECTION = 'portfolioStats';
const STATS_DOCUMENT = 'summary';
const PRESENCE_COLLECTION = 'portfolioPresence';

const statsSchema = z.object({
  visitorId: z
    .string()
    .min(8)
    .max(80)
    .regex(/^[a-zA-Z0-9_-]+$/),
  path: z.string().min(1).max(160),
  action: z.enum(['view', 'heartbeat']),
});

async function readStats() {
  const db = getAdminDb();
  const statsRef = db.collection(STATS_COLLECTION).doc(STATS_DOCUMENT);
  const [statsSnapshot, activeSnapshot] = await Promise.all([
    statsRef.get(),
    db
      .collection(PRESENCE_COLLECTION)
      .where('lastSeenAtMs', '>=', Date.now() - ACTIVE_WINDOW_MS)
      .get(),
  ]);

  return {
    enabled: true,
    totalVisits: Number(statsSnapshot.get('totalVisits') ?? 0),
    activeVisitors: activeSnapshot.size,
    activeWindowSeconds: ACTIVE_WINDOW_MS / 1000,
  };
}

export async function GET() {
  try {
    return NextResponse.json(await readStats(), { status: 200 });
  } catch (error) {
    console.error('Portfolio stats read error:', error);
    return NextResponse.json(
      { enabled: false, error: 'Portfolio stats are unavailable' },
      { status: 503 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const validation = statsSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid stats payload' }, { status: 400 });
    }

    const db = getAdminDb();
    const statsRef = db.collection(STATS_COLLECTION).doc(STATS_DOCUMENT);
    const presenceRef = db.collection(PRESENCE_COLLECTION).doc(validation.data.visitorId);
    const now = Date.now();

    const writes = [
      presenceRef.set(
        {
          path: validation.data.path,
          lastSeenAtMs: now,
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      ),
    ];

    if (validation.data.action === 'view') {
      writes.push(
        statsRef.set(
          {
            totalVisits: FieldValue.increment(1),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
      );
    }

    await Promise.all(writes);

    return NextResponse.json(await readStats(), { status: 200 });
  } catch (error) {
    console.error('Portfolio stats write error:', error);
    return NextResponse.json(
      { enabled: false, error: 'Portfolio stats are unavailable' },
      { status: 503 }
    );
  }
}
