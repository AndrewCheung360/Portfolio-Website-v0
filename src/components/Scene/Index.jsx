'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment, Lightformer } from '@react-three/drei'

export default function Index() {
  return (
    <Canvas>
        <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
            {/* <color attach="background" args={["#FFFCF0"]} /> */}
            <Model />
            <Environment preset="city">
                {/* <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
            </Environment>
    </Canvas>
  )
}