import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from './CanvasLoader'

const Universe = () => {
  const computer = useGLTF('/travel.glb')

  return (
    <mesh>
      <hemisphereLight />
      <spotLight
        position={[-50, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={0.002}
        position={[0, -1, -2]}
        rotation={[0.2, 0.8, 0]}
      />
    </mesh>
  )
}

const UniverseCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate />
        <Universe />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default UniverseCanvas
