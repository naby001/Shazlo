// src/components/ShoppingBag.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function ShoppingBag(props) {
  const group = useRef();
  const { scene } = useGLTF("/shopping-bag.glb"); // put your model in /public

  // Rotate bag slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={group} object={scene} scale={10} {...props} />;
}
