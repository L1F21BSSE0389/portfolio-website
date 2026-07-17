'use client';

import { useRef } from 'react';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Helper for drawing orbital paths
function OrbitPath({ radius, rotationX, rotationY }: { radius: number; rotationX: number; rotationY: number }) {
  const points: THREE.Vector3[] = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  const lineMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color("#00E5FF"),
    transparent: true,
    opacity: 0.35,
  });
  const lineMesh = new THREE.Line(lineGeometry, lineMaterial);
  lineMesh.rotation.set(rotationX, rotationY, 0);

  return <primitive object={lineMesh} />;
}

export default function DeveloperObjects() {
  return (
    <group>
      {/* 1. React Atom (Refractive/Glass Style) */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[-3, 1.5, -2]}>
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshPhysicalMaterial
            color="#00E5FF"
            roughness={0.1}
            metalness={0.1}
            transmission={0.8}
            ior={1.5}
            thickness={0.5}
            clearcoat={1}
            emissive="#00E5FF"
            emissiveIntensity={0.2}
          />
        </mesh>
        <OrbitPath radius={0.6} rotationX={Math.PI / 3} rotationY={0} />
        <OrbitPath radius={0.6} rotationX={-Math.PI / 3} rotationY={Math.PI / 4} />
        <OrbitPath radius={0.6} rotationX={0} rotationY={-Math.PI / 4} />
      </Float>

      {/* 2. Database Stack (Glassmorphic Cylinders) */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2} position={[3, -1.8, -3]}>
        {[0.2, 0, -0.2].map((yOffset, i) => (
          <mesh key={i} position={[0, yOffset, 0]}>
            <cylinderGeometry args={[0.32, 0.32, 0.12, 32]} />
            <meshPhysicalMaterial
              color="#7C3AED"
              roughness={0.2}
              metalness={0.3}
              transmission={0.6}
              thickness={0.2}
              emissive="#7C3AED"
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}
      </Float>

      {/* 3. Floating Glass Gems (Icosahedrons) */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[3.5, 2, -2.5]}>
        <mesh>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshPhysicalMaterial
            color="#22D3EE"
            roughness={0.05}
            metalness={0.1}
            transmission={0.9}
            ior={1.6}
            thickness={0.4}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* 4. Glowing Git Branches */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5} position={[-1.5, 3.2, -4]}>
        <group scale={0.75}>
          {/* Main Nodes */}
          <mesh position={[-0.3, -0.3, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[0.3, 0.3, 0]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Connections */}
          <mesh position={[-0.15, -0.2, 0]} rotation={[0, 0, 0.6]}>
            <boxGeometry args={[0.35, 0.02, 0.02]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[0.15, 0.1, 0]} rotation={[0, 0, 0.9]}>
            <boxGeometry args={[0.45, 0.02, 0.02]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
        </group>
      </Float>

      {/* 5. Cloud Platform (Puffy glass bubble clusters) */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.0} position={[-0.8, 3.5, -3]}>
        <group scale={0.55}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshPhysicalMaterial color="#22D3EE" roughness={0.1} metalness={0.2} transmission={0.85} thickness={0.3} />
          </mesh>
          <mesh position={[-0.2, -0.1, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhysicalMaterial color="#22D3EE" roughness={0.1} metalness={0.2} transmission={0.85} thickness={0.3} />
          </mesh>
          <mesh position={[0.2, -0.1, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhysicalMaterial color="#22D3EE" roughness={0.1} metalness={0.2} transmission={0.85} thickness={0.3} />
          </mesh>
        </group>
      </Float>

      {/* 6. Laravel Diamond / Octahedron Frame */}
      <Float speed={2} rotationIntensity={1.8} floatIntensity={1.5} position={[-4, 0, -3.2]}>
        <mesh>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#FF2D20" wireframe roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      {/* 7. Server Slabs with emissive light bars */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.0} position={[0.5, -3.5, -3.5]}>
        <group scale={0.7}>
          {[0.3, 0, -0.3].map((yOffset, i) => (
            <group key={i} position={[0, yOffset, 0]}>
              <mesh>
                <boxGeometry args={[0.9, 0.15, 0.9]} />
                <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.8} />
              </mesh>
              <mesh position={[-0.35, 0, 0.46]}>
                <sphereGeometry args={[0.025, 8, 8]} />
                <meshBasicMaterial color={i % 2 === 0 ? "#00E5FF" : "#10B981"} />
              </mesh>
              <mesh position={[-0.2, 0, 0.46]}>
                <sphereGeometry args={[0.025, 8, 8]} />
                <meshBasicMaterial color="#EF4444" />
              </mesh>
            </group>
          ))}
        </group>
      </Float>

      {/* 8. Tech Gems (Floating Gold/Green/Pink Crystals) */}
      <Float speed={3} rotationIntensity={2.5} floatIntensity={2} position={[-2.5, -0.5, -3.5]}>
        <mesh scale={0.28}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="#f59e0b" roughness={0.1} metalness={0.9} transmission={0.5} />
        </mesh>
      </Float>
      <Float speed={2.8} rotationIntensity={2.2} floatIntensity={1.8} position={[2.5, 0.5, -3.5]}>
        <mesh scale={0.28}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="#4ade80" roughness={0.1} metalness={0.9} transmission={0.5} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={2.0} floatIntensity={1.5} position={[0.5, 2.5, -5]}>
        <mesh scale={0.28}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color="#ec4899" roughness={0.1} metalness={0.9} transmission={0.5} />
        </mesh>
      </Float>
    </group>
  );
}
