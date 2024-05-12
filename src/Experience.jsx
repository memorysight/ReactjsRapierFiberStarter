import { Box, OrbitControls } from "@react-three/drei";

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

    <RigidBody>

        <Box position={[0,0,0]} args={[10,1,10]} >
            <meshStandardMaterial color = "springgreen"/>
        </Box>
        
    </RigidBody>

    </>
    )

}

export default Experience;


