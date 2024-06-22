"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[0.04, 0.04, 0.04]}
      rotation={[0.25, 0, 0]}
    >
      <primitive object={nodes._rootJoint_1} />
      <skinnedMesh
        name="Object_33"
        geometry={nodes.Object_33.geometry}
        material={materials.Wizard}
        skeleton={nodes.Object_33.skeleton}
        position={[-0.003, -0.012, 1.895]}
      />
      <mesh
        name="pSphere1_Wizard_0"
        castShadow
        receiveShadow
        geometry={nodes.pSphere1_Wizard_0.geometry}
        material={materials.Wizard}
        position={[-2.553, 59.797, 17.483]}
        rotation={[1.414, 0, 0.746]}
      />
    </group>
  )
});

export default Wizard;
useGLTF.preload("/models/scene-transformed.glb");
