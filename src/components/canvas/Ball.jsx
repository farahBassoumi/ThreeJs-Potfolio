
import { TextureLoader } from 'three';



import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";





import { useLoader } from "@react-three/fiber";
import CanvasLoader from "../Loader";





const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
<Float 
  speed={5}             // Faster floating speed
  rotationIntensity={0.2}  // More rotation
  floatIntensity={2}     // Stronger float effect
>
 <ambientLight intensity={0.05} />
  <directionalLight 
    position={[2, 2, 1]}    // Position for direct lighting
    intensity={3}         // Increased intensity for stronger light
    castShadow              // Enables shadow casting
    shadow-mapSize-width={1024}  // Set shadow map size for better quality
    shadow-mapSize-height={1024}
    shadow-camera-near={0.5}  // Adjust shadow camera settings for better shadows
    shadow-camera-far={50} 
    shadow-camera-left={-5} 
    shadow-camera-right={5} 
    shadow-camera-top={5} 
    shadow-camera-bottom={-5} 
    penumbra={1}            // Softens the edges of the light
  />

     {/* Second directional light from the opposite side */}
     <directionalLight
        position={[-3, -2, -0.3]}  // Position for the second light (opposite side)
        intensity={2}            // You can adjust the intensity if needed
        castShadow               // Enables shadow casting for the second light
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        penumbra={0.8}          // Slightly different penumbra for a softer effect
      />
  
  <mesh castShadow receiveShadow scale={2.75}>
    <icosahedronGeometry args={[1, 1]} /> 
    <meshStandardMaterial
      color='#5d006d'          // Base color
      metalness={0.9}           // Set to 1 for shiny, metallic look
      roughness={0.5}           // Set to 0 for maximum shininess
      polygonOffset
      polygonOffsetFactor={-50}
      flatShading={true}     // Set flatShading to false for smooth shading
    />
    <Decal
     // position={[0, 0, 1]}
      position={[0, 0, 1]}         // Adjust position to center decal
      rotation={[0, 0, 0]}         // Correct rotation to avoid mirroring
    //  rotation={[2 * Math.PI, 15, 6.25]}
      scale={0.8}
      map={decal}
      flatShading={false}     // Ensure the decal also has smooth shading
    />
  </mesh>
</Float>

  );
};



const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='always'     
    dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
// const Ball = () => {
//    const [decal]=useTexture([props.imgUrl]);

//   return (

//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//     <>
//        <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh> 
//       </>
//     // </Float>
//   );
// };


// const BallCanvas = ({icon}) => {
//   const [decal] = useTexture(icon);
//   const texture = useLoader(TextureLoader, icon);

//   return (
//     <Canvas
//       className="flex "
//       frameloop="demand"
//       shadows
//       camera={{
//         position: [20, 3, 5],
//         fov: 25,
//       }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />



//         <Ball imgUrl={icon} /> 

//          <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
  
//        <ambientLight intensity={0.55} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//           rotationIntensity={5}
//           map={texture}
//           scale={1}
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh> 
//      </Float>
     




//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

export default BallCanvas;
