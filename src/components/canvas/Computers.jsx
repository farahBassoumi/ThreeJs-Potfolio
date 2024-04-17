import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ({ isMobile }) => {
  const computer = useGLTF("https://farahbassoumi.github.io/ThreeJs-Potfolio/computer/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={2} position={isMobile ? [1, 0, 0] : [0, 0, 0.5]} />
      <spotLight
        intensity={20}
        position={isMobile ? { x: -20, y: 50, z: 10 } : { x: -30, y: 50, z: 0 }}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.58 : 0.7}
        position={isMobile ? [1, -2.3, -1] : [1, -2.85, -1]}
        rotation={[-0.01, -0.2, -0.05]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        console.log("mobile");
      } else {
        setIsMobile(false);
        console.log("not mobile");
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Canvas
      className="flex overflow-visible"
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers className="overflow-visible" isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
 export default ComputersCanvas;
