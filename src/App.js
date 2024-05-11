import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import Scene from "./Scene";
import ComplexRigidBody from "./ComplexRigidBody";
import Virus1 from "./Virus1";
import { OrbitControls, PerspectiveCamera, Environment, Torus} from "@react-three/drei";

const App = () => {
  return (
    <Canvas>
      <Suspense>
      <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
      <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />

        
        <Physics debug>
          <OrbitControls />
          <ambientLight />
          <PerspectiveCamera
            makeDefault
            fov={50}
            position={[-1.75, 10.85, 20.35]}
          />

          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
          </RigidBody>

          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
        </Physics>

        {/* //////////////////// */}

        <Scene />
        <ComplexRigidBody />

        {/* //////////////////// */}

        <Virus1 />
      </Suspense>
    </Canvas>
  );
};

export default App;
