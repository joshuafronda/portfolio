import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import { useRapier } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

const Lanyard = ({ position = [0, 0, 0], gravity = [0, -9.81, 0] }) => {
  const { world } = useRapier();
  const lanyardRef = useRef();
  const cardRef = useRef();
  
  // Load models and textures
  const { nodes } = useGLTF('/card.glb');
  const lanyardTexture = useTexture('/lanyard.png');

  useFrame(() => {
    if (lanyardRef.current && cardRef.current) {
      // Update physics simulation
      world.step();
    }
  });

  return (
    <group position={position}>
      {/* Lanyard band */}
      <mesh ref={lanyardRef}>
        <meshLineGeometry attach="geometry" points={[0, 0, 0, 0, 1, 0]} />
        <meshLineMaterial
          attach="material"
          map={lanyardTexture}
          useMap
          transparent
          lineWidth={0.1}
          color="#ffffff"
        />
      </mesh>
      
      {/* ID Card */}
      <mesh
        ref={cardRef}
        geometry={nodes.Card.geometry}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          map={nodes.Card.material.map}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

export default Lanyard;