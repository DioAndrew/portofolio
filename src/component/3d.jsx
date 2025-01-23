import { OrbitControls, CameraControls } from "@react-three/drei"
import {EffectComposer, Bloom, ToneMapping} from "@react-three/postprocessing"
import { SakuraTree } from "./Sakura_Tree_7"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

function Scene(){

    gsap.registerPlugin(ScrollTrigger);
    const cameraControl = useRef()
    const {camera, gl} = useThree()

    useEffect(() =>{
        
        ScrollTrigger.create({
            trigger: ".skills",
            start: "top center",
            end: "top center",
            onEnter: () => {
                cameraControl.current.setLookAt(60, 2, -20, 0, 6.88, 0, true)
            },
            onEnterBack: () => {
                cameraControl.current.setLookAt(60, 2, 20, 0, 6.88, 0, true)
            },
        })

        ScrollTrigger.create({
            trigger: ".projects",
            start: "-10% center",
            end: "-10% center",
            onEnter: () => {
                cameraControl.current.setLookAt(80, 15, -100, 0, 6.88, 0, true)
            },
            onEnterBack: () => {
                cameraControl.current.setLookAt(60, 2, -20, 0, 6.88, 0, true)
            },
        })

        
        }, [])
    
    return(
        <>
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} levels={5.3} intensity={3}/>
                <ToneMapping />
            </EffectComposer>
            <SakuraTree />
            <CameraControls ref={cameraControl} args={[camera, gl.domElement]}/>
        </>
    )
}
export default Scene