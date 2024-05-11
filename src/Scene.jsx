import { Box, Sphere } from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  MeshCollider
} from "@react-three/rapier";


const Scene = () => (
  <Physics debug>

    {/* ///box */}
    <RigidBody>
      <Box />
    </RigidBody>



    {/* ///Sphere with Box */}
    <RigidBody position={[0, 10, 0]}>
      <Sphere />
    </RigidBody>
    <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
 
  </Physics>
);

export default Scene;
