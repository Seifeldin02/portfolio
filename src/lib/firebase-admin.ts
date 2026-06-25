import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import type { Firestore } from 'firebase-admin/firestore';

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required Firebase environment variable: ${name}`);
  }

  return value;
}

function getPrivateKey() {
  return requiredEnv('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n');
}

let cachedDb: Firestore | null = null;

export function getAdminDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const app =
    getApps()[0] ??
    initializeApp({
      credential: cert({
        projectId: requiredEnv('FIREBASE_PROJECT_ID'),
        clientEmail: requiredEnv('FIREBASE_CLIENT_EMAIL'),
        privateKey: getPrivateKey(),
      }),
    });

  cachedDb = getFirestore(app);
  return cachedDb;
}
