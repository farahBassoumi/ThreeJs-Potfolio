import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { TextureLoader } from 'three';

import {
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import CanvasLoader from "../Loader";
const Ball = () => {
  //  const [decal]=useTexture([props.imgUrl]);

  return (

    // <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <>
       <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        /> */}
      </mesh> 
      </>
    // </Float>
  );
};
const BallCanvas = ({icon}) => {
  //const [decal] = useTexture(icon);
  const texture = useLoader(TextureLoader, icon);

  return (
    <Canvas
      className="flex "
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />



        {/* <Ball imgUrl={icon} />  */}

         <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
  
       <ambientLight intensity={0.55} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          rotationIntensity={5}
          map={texture}
          scale={1}
        />
        {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        /> */}
      </mesh> 
     </Float>
     




      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
