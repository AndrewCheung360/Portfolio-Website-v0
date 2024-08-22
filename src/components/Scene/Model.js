'use client'
import React, { useRef, useMemo, useEffect, memo} from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three';

export default function Model({isMobile}) {
    // const { nodes } = useGLTF("/models/torrus.glb");
    const { viewport, gl } = useThree()
    const torus = useRef();
    const geometry = useMemo(() => new THREE.TorusGeometry(4, 1.2, 128, 64), []);

    useFrame( () => {
        torus.current.rotation.x += 0.02;
        
    })


    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    }

    // const materialProps = useControls({

    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    //     roughness: { value: 0, min: 0, max: 1, step: 0.01 },

    //     transmission: {value: 1, min: 0, max: 1, step: 0.1},

    //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    //     chromaticAberration: { value: 0.02, min: 0, max: 1},

    //     backside: { value: true},

    //     backsideThickness: { value: 5, min: 0, max: 10, step: 0.1},


    // })args={[4, 1.2, 128, 64]}

    const TorusComponent = (props) => (
        <mesh receiveShadow castShadow {...props} geometry={geometry}>
          {/* <torusGeometry  /> */}
          <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
        </mesh>
      )

    const Torus = memo(TorusComponent)
    return (
        <mesh ref={torus} scale = {isMobile ? (viewport.width / 15):(viewport.width / 30)} rotation={[Math.PI / 6, Math.PI / 6, 0]}>
            <Torus />
        </mesh>
    )
}