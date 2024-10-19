import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ({ isMobile }) => {
  //const computer = useGLTF("https://farahbassoumi.github.io/ThreeJs-Potfolio/robot/scene.gltf");
  const computer = useGLTF("./webdev/scene.gltf");


  
  return (
    <mesh>
    <hemisphereLight intensity={0.15} groundColor='black' />
    <spotLight
      position={[-2, 5, 1]}
      angle={0.72}
      penumbra={1}
      intensity={100}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={10} />
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.7 : 1}
      position={isMobile ? [0, -3, -2.2] : [0, -3, -1.5]}
      rotation={[0.1, 2, -0.1]}
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
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}   // Disable panning to keep the object fixed
          rotateSpeed={1.0}   // Adjust rotation speed
        />
        <Computers isMobile={isMobile} />
      </Suspense>


      <Preload all />
    </Canvas>
      );
    };
    
    export default ComputersCanvas;
    