import { Box, OrbitControls, Sphere, Torus } from "@react-three/drei";

// import { useFrame } from "@react-three/fiber";
import { BallCollider, CuboidCollider, RigidBody} from "@react-three/rapier";
import { useState, useRef } from "react";
// import { Controls } from "../App";


function Experience(){

    const [hover, setHover] = useState(false);
    // const cube = useRef();
    // const jump=()=>{
    //     cube.current.applyImpulse({x:0, y:5, z:0});
    // }

    return(
        <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[-10, 10, 0]} intensity={0.4} />
    <OrbitControls />

        <RigidBody position={[-2,5,0]} colliders={false} gravityScale={4}>
            <BallCollider args={[1]} position={[0,1,0]}/>
            <Sphere position={1}>
                <meshStandardMaterial color="yellow"/>
                </Sphere>
                <CuboidCollider args={[.5,.5,.5]}/>=
                <Box
                onPointer={()=>setHover(true)} 
                onPointerLeave={()=>setHover(false)}
                // onClick={jump}
                >
            <meshStandardMaterial color={hover ? "orange" : "purple"}/>
        </Box>
        </RigidBody>

        <RigidBody position={[0,4,0]} colliders="trimesh">
            <Torus >
                <meshStandardMaterial color="purple"/>
            </Torus>
        </RigidBody>

    <RigidBody position = {[3,5,0]}>
        
    </RigidBody>

    <RigidBody type="fixed" >

        <Box position={[0,0,0]} args={[10,1,10]} >
            <meshStandardMaterial color = "springgreen"/>
        </Box>
        
    </RigidBody>

    </>
    )

}

export default Experience;


