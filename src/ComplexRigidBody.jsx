import { Sphere } from "@react-three/drei";
import {
  Physics,
  RigidBody,
  BallCollider, CuboidCollider
} from "@react-three/rapier";

function ComplexRigidBody() {
  return (
    <Physics debug>
    <RigidBody position={[0, 10, 0]}>
      <Sphere />
      <BallCollider args={[0.5]} />
      <BallCollider args={[0.5]} position={[1, 0, 0]} />
    </RigidBody> 
    <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
    </Physics>
  );
}

export default ComplexRigidBody;
