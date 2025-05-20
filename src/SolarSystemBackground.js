import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function OrbitRing({ radius }) {
  return (
    <mesh>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color="#888" />
    </mesh>
  );
}

function Planet({ orbitRadius, size, color, orbitSpeed, selfSpeed, initialAngle = 0 }) {
  const ref = useRef();
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Gezegenin güneş etrafında dönmesi
    const angle = initialAngle + t * orbitSpeed;
    group.current.position.x = Math.cos(angle) * orbitRadius;
    group.current.position.z = Math.sin(angle) * orbitRadius;
    // Gezegenin kendi etrafında dönmesi
    ref.current.rotation.y = t * selfSpeed;
  });

  return (
    <group ref={group}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

const SolarSystemBackground = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
    <Canvas camera={{ position: [0, 10, 40], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      {/* Güneş */}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial emissive="yellow" color="yellow" emissiveIntensity={1} />
      </mesh>
      {/* Yörünge halkaları */}
      <OrbitRing radius={10} />
      <OrbitRing radius={15} />
      <OrbitRing radius={20} />
      <OrbitRing radius={25} />
      {/* Gezegenler */}
      <Planet orbitRadius={10} size={1.5} color="blue" orbitSpeed={0.5} selfSpeed={1.5} />
      <Planet orbitRadius={15} size={1} color="red" orbitSpeed={0.3} selfSpeed={1.2} initialAngle={1} />
      <Planet orbitRadius={20} size={2} color="#e2b07a" orbitSpeed={0.2} selfSpeed={1.1} initialAngle={2} />
      <Planet orbitRadius={25} size={0.8} color="green" orbitSpeed={0.7} selfSpeed={2} initialAngle={3} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  </div>
);

export default SolarSystemBackground; 