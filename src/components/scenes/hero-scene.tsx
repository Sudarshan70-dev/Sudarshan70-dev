"use client";

import { RoundedBox, Sparkles, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type HeroSceneProps = {
  accent: string;
  secondaryAccent: string;
  mode: "full" | "lite";
};

function FloatingCluster({
  accent,
  secondaryAccent,
  mode,
}: HeroSceneProps) {
  const root = useRef<Group>(null);
  const rig = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!root.current || !rig.current) {
      return;
    }

    root.current.rotation.y += delta * (mode === "full" ? 0.14 : 0.08);
    root.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    rig.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <group ref={root}>
      <group ref={rig}>
        <Torus args={[2.25, 0.035, 16, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2.3} transparent opacity={0.5} />
        </Torus>
        <Torus args={[1.58, 0.03, 16, 90]} rotation={[0.8, 0.5, 0.4]}>
          <meshStandardMaterial color={secondaryAccent} emissive={secondaryAccent} emissiveIntensity={1.7} transparent opacity={0.35} />
        </Torus>
        <RoundedBox args={[2.8, 1.45, 0.08]} radius={0.14} position={[0, 0.15, 0]}>
          <meshPhysicalMaterial
            color="#0f172a"
            roughness={0.14}
            metalness={0.2}
            transparent
            opacity={0.74}
            transmission={0.88}
            thickness={1.2}
            ior={1.2}
          />
        </RoundedBox>
        <RoundedBox args={[1.72, 0.36, 0.08]} radius={0.12} position={[-0.15, 1.15, 0.32]} rotation={[0.24, -0.34, 0.08]}>
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.4} transparent opacity={0.62} />
        </RoundedBox>
        <RoundedBox args={[1.22, 0.28, 0.08]} radius={0.12} position={[1.1, -1.18, -0.24]} rotation={[-0.12, 0.28, -0.42]}>
          <meshStandardMaterial color={secondaryAccent} emissive={secondaryAccent} emissiveIntensity={1.2} transparent opacity={0.58} />
        </RoundedBox>
        <Sphere args={[0.24, 32, 32]} position={[-1.95, 0.95, 0.85]}>
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2.4} />
        </Sphere>
        <Sphere args={[0.15, 24, 24]} position={[1.78, 1.28, -0.55]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.65} />
        </Sphere>
        <Sphere args={[0.18, 24, 24]} position={[1.55, -1.05, 0.65]}>
          <meshStandardMaterial color={secondaryAccent} emissive={secondaryAccent} emissiveIntensity={1.45} />
        </Sphere>
      </group>
      <Sparkles count={mode === "full" ? 120 : 80} scale={[8, 5, 4]} size={3.5} speed={0.38} color={accent} />
      <Sparkles count={40} scale={[7, 4, 3]} size={4.5} speed={0.22} color={secondaryAccent} />
    </group>
  );
}

export default function HeroScene({ accent, secondaryAccent, mode }: HeroSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, mode === "full" ? 7 : 8], fov: 42 }}>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 7.5, 15]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[2, 4, 5]} intensity={1.75} color="#ffffff" />
      <pointLight position={[-3, -1, 3]} intensity={2.4} color={accent} />
      <pointLight position={[3, 2, 1]} intensity={2.1} color={secondaryAccent} />
      <FloatingCluster accent={accent} secondaryAccent={secondaryAccent} mode={mode} />
    </Canvas>
  );
}
