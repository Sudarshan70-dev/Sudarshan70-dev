"use client";

import { Html, Icosahedron, OrbitControls, Sparkles, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type SkillsSceneProps = {
  labels: string[];
  accent: string;
};

function SkillOrbit({ labels, accent }: SkillsSceneProps) {
  const root = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!root.current) {
      return;
    }

    root.current.rotation.y += delta * 0.18;
    root.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group ref={root}>
      <Torus args={[2, 0.03, 16, 120]} rotation={[Math.PI / 2.35, 0, 0]}>
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.8} transparent opacity={0.4} />
      </Torus>
      <Torus args={[1.28, 0.025, 16, 90]} rotation={[0.7, 0.4, 0.18]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.35} transparent opacity={0.35} />
      </Torus>
      <Icosahedron args={[0.95, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0f172a" emissive="#0f172a" metalness={0.18} roughness={0.3} />
      </Icosahedron>
      <Html center distanceFactor={8.2} position={[0, 0, 0]}>
        <div className="rounded-full border border-cyan-300/20 bg-slate-950/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_10px_30px_rgba(2,8,23,0.45)] backdrop-blur-sm">
          Skill Atlas
        </div>
      </Html>
      {labels.slice(0, 8).map((label, index) => {
        const total = Math.min(labels.length, 8);
        const angle = (Math.PI * 2 * index) / total;
        const radius = index % 2 === 0 ? 2.15 : 1.62;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle * 1.15) * 0.9;
        const z = Math.sin(angle) * 1.25;

        return (
          <group key={label} position={[x, y, z]}>
            <Sphere args={[0.1, 16, 16]}>
              <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2.2} />
            </Sphere>
            <Html center distanceFactor={6.5}>
              <div className="rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold text-slate-100 shadow-[0_8px_30px_rgba(2,8,23,0.35)] backdrop-blur-sm">
                {label}
              </div>
            </Html>
          </group>
        );
      })}
      <Sparkles count={36} scale={[6, 4, 3]} size={4} speed={0.22} color={accent} />
    </group>
  );
}

export default function SkillsScene({ labels, accent }: SkillsSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 7.2], fov: 45 }}>
      <ambientLight intensity={0.85} />
      <pointLight position={[3, 4, 2]} intensity={1.7} color={accent} />
      <pointLight position={[-3, -1, 3]} intensity={1.4} color="#8b5cf6" />
      <SkillOrbit labels={labels} accent={accent} />
      <OrbitControls autoRotate autoRotateSpeed={0.4} enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
