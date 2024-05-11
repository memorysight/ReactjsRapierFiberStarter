import {useLoader, ambientLight} from '@react-three/fiber';
import {useEffect} from 'react';
import {BufferAttribute, Color} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const Virus1 = ()=>{

    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/Starr.glb");

    useEffect(()=>{
        if(gltf) return;

        let mesh = gltf.scene.childeren[0];
        var uvs = mesh.geometry.attribute.uv.array;
        mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2));

        
        mesh.material.lightMap = mesh.material.map;
        mesh.material.lightMapIntensity = 400;
        mesh.material.color = new Color(0.04, 0.06, 0.1);
    }, [gltf]);



    return(

        <>

<ambientLight />
<pointLight position={[0, 20, 10]} intensity={3.5} />

        <primitive object={gltf.scene}/>
        </>
       
    )

}
export default Virus1;