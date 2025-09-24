import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const bagRef = useRef();
  const shotsRef = useRef([]);
  const { scene } = useGLTF("/shopping-bag.glb");

  useEffect(() => {
    // Bag rotation
    gsap.to(bagRef.current.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        start: "top top",
        end: "20%",
        scrub: true,
      },
    });

    // Screenshots pop out
    gsap.to(shotsRef.current.map((m) => m.position), {
      y: 3,
      stagger: 0.2,
      scrollTrigger: {
        start: "20%",
        end: "40%",
        scrub: true,
      },
    });

    // Bag fades away
    gsap.to(bagRef.current.scale, {
      x: 0, y: 0, z: 0,
      scrollTrigger: {
        start: "40%",
        end: "50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <group>
      {/* Bag */}
      <primitive ref={bagRef} object={scene} scale={2} />

     
    </group>
  );
}
