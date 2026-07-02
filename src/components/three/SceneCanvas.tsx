'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import DeveloperObjects from './DeveloperObjects';

// Mouse parallax controller
function InteractiveScene() {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      // Map to small rotation values
      targetRotation.current.y = x * 0.4;
      targetRotation.current.x = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Lerp rotation for smooth transition
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <DeveloperObjects />
    </group>
  );
}

// Particle field
function ParticlesBackground({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particles
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12; // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // Z (behind scene)
  }

  useFrame((state) => {
    if (pointsRef.current) {
      // Slow rotation over time
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00E5FF"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function SceneCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
        <ParticlesBackground />
        <InteractiveScene />
      </Canvas>
    </div>
  );
}
