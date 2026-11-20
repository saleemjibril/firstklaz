import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Center, Environment, Stage } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";

const CameraAdjuster = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0.15, 2);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const LogoModel = ({ scale }) => {
  const { scene } = useGLTF("/firstklaz-logo.glb");

  useEffect(() => {
    // Enhance the material properties
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 1.1; // Increase metalness
        child.material.roughness = 0.1; // Decrease roughness for more reflection
        child.material.envMapIntensity = 1.5; // Enhance environment map reflection
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <Center scale={scale}>
      <primitive object={scene} position={[0, 0, 0]} />
      <CameraAdjuster />
    </Center>
  );
};

const LogoModelViewer = ({ handleHome }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className="logo-model-viewer"
      style={{ width: "200px", height: "100px", cursor: "pointer" }}
      onClick={handleHome}
      role="link"
      aria-label="Firstklaz home"
    >
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <Stage intensity={1} environment={null} adjustCamera={false}>
            <LogoModel scale={isMobile ? 0.7 : 1} />
            <Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LogoModelViewer;
