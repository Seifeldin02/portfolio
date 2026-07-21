'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const nodePositions: [number, number, number][] = [
  [0, 0, 0.35],
  [-1.85, 1.05, -0.2],
  [-1.5, -1.2, 0.15],
  [-0.35, 1.55, -0.55],
  [1.5, 1.1, 0.1],
  [1.9, -0.35, -0.45],
  [0.75, -1.55, 0.2],
  [0.15, -0.95, -1.05],
];

const connections: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [1, 3],
  [1, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [2, 7],
];

function EvidenceGraph({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const linePositions = useMemo(() => {
    const values: number[] = [];
    connections.forEach(([from, to]) => {
      values.push(...nodePositions[from], ...nodePositions[to]);
    });
    return new Float32Array(values);
  }, []);

  const evidenceParticles = useMemo(() => {
    const values: number[] = [];
    connections.forEach(([from, to], connectionIndex) => {
      const start = nodePositions[from];
      const end = nodePositions[to];
      for (let pointIndex = 1; pointIndex <= 3; pointIndex += 1) {
        const progress = (pointIndex + (connectionIndex % 2) * 0.25) / 4;
        values.push(
          start[0] + (end[0] - start[0]) * progress,
          start[1] + (end[1] - start[1]) * progress,
          start[2] + (end[2] - start[2]) * progress
        );
      }
    });
    return new Float32Array(values);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return;

    const targetX = state.pointer.y * 0.08;
    const targetY = state.pointer.x * 0.12 + state.clock.elapsedTime * 0.035;
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      3,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      3,
      delta
    );
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.2, -0.04]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.34} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[evidenceParticles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#67e8f9" size={0.035} transparent opacity={0.65} sizeAttenuation />
      </points>

      {nodePositions.map((position, index) => (
        <mesh key={position.join('-')} position={position}>
          {index === 0 ? (
            <icosahedronGeometry args={[0.24, 1]} />
          ) : (
            <octahedronGeometry args={[index % 3 === 0 ? 0.13 : 0.1, 0]} />
          )}
          <meshStandardMaterial
            color={index === 0 ? '#67e8f9' : '#0f766e'}
            emissive={index === 0 ? '#164e63' : '#083344'}
            emissiveIntensity={index === 0 ? 1.2 : 0.65}
            roughness={0.28}
            metalness={0.55}
          />
        </mesh>
      ))}

      <pointLight position={[0, 0, 2.5]} color="#67e8f9" intensity={12} distance={7} />
      <ambientLight intensity={0.6} />
    </group>
  );
}

export default function EngineeringCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 5.25], fov: 47 }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      <EvidenceGraph reducedMotion={reducedMotion} />
    </Canvas>
  );
}
