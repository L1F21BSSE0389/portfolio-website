'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Helper for drawing orbit lines
function OrbitRing({ radius, rotationX, rotationY }: { radius: number; rotationX: number; rotationY: number }) {
  const points: THREE.Vector3[] = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  // Using primitive to prevent clash between React SVG line tag and ThreeJS Line element
  const lineMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color("#00E5FF"),
    transparent: true,
    opacity: 0.5,
  });
  const lineMesh = new THREE.Line(lineGeometry, lineMaterial);
  lineMesh.rotation.set(rotationX, rotationY, 0);

  return <primitive object={lineMesh} />;
}

// React Atom Object
function ReactAtom({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      // Hover floating effect
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#00E5FF" toneMapped={false} />
      </mesh>
      {/* Orbital Rings */}
      <OrbitRing radius={0.55} rotationX={Math.PI / 3} rotationY={0} />
      <OrbitRing radius={0.55} rotationX={-Math.PI / 3} rotationY={Math.PI / 4} />
      <OrbitRing radius={0.55} rotationX={0} rotationY={-Math.PI / 4} />
    </group>
  );
}

// Database Cylinder
function DatabaseCylinder({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.9) * 0.12;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* 3 stacked slices */}
      {[0.2, 0, -0.2].map((yOffset, i) => (
        <mesh key={i} position={[0, yOffset, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.12, 16]} />
          <meshStandardMaterial color="#7C3AED" wireframe roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Laptop Low-poly representation
function Laptop({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.7}>
      {/* Keyboard Base */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.6]} />
        <meshStandardMaterial color="#22D3EE" roughness={0.5} />
      </mesh>
      {/* Screen lid (tilted back) */}
      <mesh position={[0, 0.3, -0.28]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.04]} />
        <meshStandardMaterial color="#00E5FF" roughness={0.3} />
      </mesh>
    </group>
  );
}

// Code Window Frame
function CodeWindow({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.08;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      ref.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 0.7) * 0.15;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.8}>
      {/* Background Plane */}
      <mesh>
        <planeGeometry args={[0.8, 0.6]} />
        <meshBasicMaterial color="#050816" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Border Wireframe */}
      <mesh>
        <planeGeometry args={[0.8, 0.6]} />
        <meshBasicMaterial color="#7C3AED" wireframe side={THREE.DoubleSide} />
      </mesh>
      {/* Top Bar Circles */}
      <mesh position={[-0.3, 0.24, 0.01]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-0.22, 0.24, 0.01]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#eab308" />
      </mesh>
      <mesh position={[-0.14, 0.24, 0.01]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#22c55e" />
      </mesh>
    </group>
  );
}

// Git branch node structure
function GitNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.1) * 0.18;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.7}>
      {/* Node 1 */}
      <mesh position={[-0.3, -0.3, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      {/* Node 2 */}
      <mesh position={[0.3, 0.3, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      {/* Main intersection */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Connecting tube/line represented as wireframe boxes */}
      <mesh position={[-0.15, -0.2, 0]} rotation={[0, 0, 0.6]}>
        <boxGeometry args={[0.35, 0.02, 0.02]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[0.15, 0.1, 0]} rotation={[0, 0, 0.9]}>
        <boxGeometry args={[0.45, 0.02, 0.02]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}

// Floating random cubes
function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8 + position[0]) * 0.25;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={0.35}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} transparent opacity={0.7} />
    </mesh>
  );
}

export default function DeveloperObjects() {
  return (
    <group>
      {/* 3D React Atom */}
      <ReactAtom position={[-3, 1.5, -2]} />

      {/* 3D Database */}
      <DatabaseCylinder position={[3, -2, -3]} />

      {/* 3D Laptop */}
      <Laptop position={[3.5, 2, -2.5]} />

      {/* 3D Code Window */}
      <CodeWindow position={[-3.5, -1.8, -2.5]} />

      {/* 3D Git Node */}
      <GitNode position={[-1.5, 3, -4]} />

      {/* Cubes */}
      <FloatingCube position={[-2.5, -0.5, -3.5]} color="#f59e0b" /> {/* JS Gold */}
      <FloatingCube position={[2.5, 0.5, -3.5]} color="#4ade80" /> {/* Node.js Green */}
      <FloatingCube position={[0.5, 2.5, -5]} color="#ec4899" /> {/* Laravel Red/Pink */}
    </group>
  );
}
