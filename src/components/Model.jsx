import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Center, Environment, Html, Stage } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";

const MODEL_PATH = "/sdsd.glb";

const CameraAdjuster = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0.15, 2);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Model = ({ rotationY, scale }) => {
  const { scene } = useGLTF(MODEL_PATH);

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
      <group rotation-y={rotationY}>
        <primitive object={scene} position={[0, 0, 0]} />
      </group>
      <CameraAdjuster />
    </Center>
  );
};

const ModelViewer = () => {
  const isMobile = useIsMobile();
  const [rotationY, setRotationY] = React.useState(0);
  const isDragging = useRef(false);
  const previousX = useRef(0);

  const startDrag = (x) => {
    isDragging.current = true;
    previousX.current = x;
  };

  const drag = (x) => {
    if (isDragging.current) {
      const deltaX = x - previousX.current;
      setRotationY((prev) => prev + deltaX * 0.01);
      previousX.current = x;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="model-viewer"
      style={{ width: "100%", height: "100vh", cursor: "grab" }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => drag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => drag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {/* Keyed so the camera's field of view updates when crossing the breakpoint */}
      <Canvas
        key={isMobile ? "mobile" : "desktop"}
        shadows
        camera={{ position: [0, 0, 2], fov: isMobile ? 50 : 57 }}
      >
        <color attach="background" args={["#000000"]} />
        <Suspense
          fallback={
            <Html center>
              <div className="spinner-container">
                <div className="spinner" />
              </div>
            </Html>
          }
        >
          <Stage intensity={1} environment={null} adjustCamera={false}>
            <Model scale={isMobile ? 1.3 : 2} rotationY={rotationY} />
            <Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
