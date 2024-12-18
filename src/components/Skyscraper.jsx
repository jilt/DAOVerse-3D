/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\public\models\Skyscraper.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Skyscraper(props) {
  const { nodes, materials } = useGLTF('/models/Skyscraper.glb')
   return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Plane_3.geometry} material={materials.grass} />
      <mesh geometry={nodes.Plane_4.geometry} material={materials['glass.002']} />
      <mesh geometry={nodes.Plane_5.geometry} material={materials.bench} />
    </group>
  )
}

useGLTF.preload('/Skyscraper.glb')
