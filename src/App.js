import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import Scene from "./Scene";
import ComplexRigidBody from "./ComplexRigidBody";
import Virus1 from "./Virus1";
import { OrbitControls, PerspectiveCamera, Environment, Torus, Stats} from "@react-three/drei";
import Experience from './Experience';

const App = () => {

  const testing = false;
  return (
    
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics debug >
          <Experience />
          <Stats />
        </Physics>

      </Suspense>
    </Canvas>

  );
};

export default App;
