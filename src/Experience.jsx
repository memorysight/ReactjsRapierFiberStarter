import { Box, OrbitControls, Sphere, Torus } from "@react-three/drei";

// import { useFrame } from "@react-three/fiber";
import { RigidBody} from "@react-three/rapier";
// import { useRef, useState } from "react";
// import { Controls } from "../App";


function Experience(){

    return(
        <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-10, 10, 0]} intensity={0.4} />
    <OrbitControls />

        <RigidBody position={[0,5,0]} colliders="ball">
            <Sphere >
                <meshStandardMaterial color="yellow"/>
                </Sphere>
        </RigidBody>

        <RigidBody position={[0,4,0]} colliders="hull">
            <Torus >
                <meshStandardMaterial color="purple"/>
            </Torus>
        </RigidBody>

    <RigidBody position = {[3,5,0]}>
        <Box>
            <meshStandardMaterial color="blue"/>
        </Box>
    </RigidBody>

    <RigidBody type="fixed">

        <Box position={[0,0,0]} args={[10,1,10]} >
            <meshStandardMaterial color = "springgreen"/>
        </Box>
        
    </RigidBody>

    </>
    )

}

export default Experience;


