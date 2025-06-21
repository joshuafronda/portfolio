import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import fs from 'fs';
import path from 'path';

export function createPlaceholderCardGLB() {
  // Create a scene
  const scene = new THREE.Scene();

  // Create card geometry
  const cardGeometry = new THREE.BoxGeometry(1, 1.5, 0.1);
  const cardMaterial = new THREE.MeshPhysicalMaterial({ 
    color: 0x888888, 
    clearcoat: 1, 
    clearcoatRoughness: 0.15, 
    roughness: 0.9, 
    metalness: 0.8 
  });
  const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
  cardMesh.name = 'card';
  scene.add(cardMesh);

  // Create clip geometry
  const clipGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const metalMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x555555, 
    metalness: 0.8, 
    roughness: 0.3 
  });
  const clipMesh = new THREE.Mesh(clipGeometry, metalMaterial);
  clipMesh.name = 'clip';
  clipMesh.position.set(0.6, 0.7, 0.1);
  scene.add(clipMesh);

  // Create clamp geometry
  const clampGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.1);
  const clampMesh = new THREE.Mesh(clampGeometry, metalMaterial);
  clampMesh.name = 'clamp';
  clampMesh.position.set(-0.6, -0.7, 0.1);
  scene.add(clampMesh);

  // Export to GLB
  const exporter = new GLTFExporter();
  exporter.parse(
    scene, 
    (gltf) => {
      // Ensure assets directory exists
      const assetsDir = path.resolve(__dirname, '../assets');
      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
      }

      // Write file
      const outputPath = path.join(assetsDir, 'card.glb');
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      console.log(`Placeholder card.glb saved to ${outputPath}`);
    }, 
    { binary: true }
  );
}

// Uncomment to generate the file when this script is run
createPlaceholderCardGLB();