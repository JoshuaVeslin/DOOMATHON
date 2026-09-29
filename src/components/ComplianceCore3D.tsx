import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ComplianceCore3DProps {
  onObjectClick?: () => void;
  className?: string;
}

export const ComplianceCore3D: React.FC<ComplianceCore3DProps> = ({ onObjectClick, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Sculptural Group: "Compliance Intelligence Core"
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Materials: Predominantly Matte Graphite with subtle physical sheen
    const darkGraphiteMaterial = new THREE.MeshStandardMaterial({
      color: 0x161616,
      roughness: 0.38,
      metalness: 0.72,
      flatShading: false,
    });

    const warmAccentEdgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF9D1C,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0xFF9D1C,
      emissiveIntensity: 0.15,
    });

    const coolSilverMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A2A2A,
      roughness: 0.5,
      metalness: 0.9,
    });

    // 1. Layered Technical Document Plates (Abstract Standards Dossiers)
    const plateGeometries = [
      { w: 2.6, h: 3.8, d: 0.06, rx: 0.12, ry: 0.28, rz: -0.08, pos: [-0.3, 0.15, 0.2] },
      { w: 2.5, h: 3.6, d: 0.05, rx: -0.18, ry: -0.32, rz: 0.15, pos: [0.35, -0.1, -0.15] },
      { w: 2.9, h: 4.1, d: 0.04, rx: 0.05, ry: -0.15, rz: -0.04, pos: [0.05, 0.0, 0.0] },
      { w: 2.2, h: 3.2, d: 0.08, rx: 0.32, ry: 0.45, rz: -0.22, pos: [-0.45, -0.3, 0.4] },
      { w: 2.0, h: 2.8, d: 0.04, rx: -0.25, ry: 0.18, rz: 0.2, pos: [0.5, 0.35, -0.3] },
    ];

    plateGeometries.forEach((spec, i) => {
      const geom = new THREE.BoxGeometry(spec.w, spec.h, spec.d);
      const mesh = new THREE.Mesh(geom, i === 0 ? darkGraphiteMaterial : (i === 3 ? warmAccentEdgeMaterial : coolSilverMaterial));
      mesh.position.set(spec.pos[0], spec.pos[1], spec.pos[2]);
      mesh.rotation.set(spec.rx, spec.ry, spec.rz);
      coreGroup.add(mesh);

      // Fine hairline edge wireframe for architectural technical precision
      const edges = new THREE.EdgesGeometry(geom);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: i === 3 ? 0xFFB347 : 0x555555,
        transparent: true,
        opacity: 0.45,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      mesh.add(wireframe);
    });

    // 2. Faceted Interlocking Octahedron Core Elements (Representing Regulatory Invariants)
    const octaGeom = new THREE.OctahedronGeometry(0.7, 0);
    const octaMesh = new THREE.Mesh(octaGeom, darkGraphiteMaterial);
    octaMesh.position.set(0.1, 0.2, 0.6);
    octaMesh.scale.set(1.2, 1.4, 0.9);
    coreGroup.add(octaMesh);

    const octaWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(octaGeom),
      new THREE.LineBasicMaterial({ color: 0xFF9D1C, transparent: true, opacity: 0.6 })
    );
    octaMesh.add(octaWire);

    // 3. Subtle Knowledge Nodes (Small satellite spheres and geometric markers)
    const nodeCount = 14;
    const nodesGroup = new THREE.Group();
    coreGroup.add(nodesGroup);

    const nodeGeom = new THREE.SphereGeometry(0.045, 16, 16);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF9D1C,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xFF9D1C,
      emissiveIntensity: 0.3,
    });

    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.8 + Math.random() * 0.8;
      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      const node = new THREE.Mesh(nodeGeom, nodeMaterial);
      node.position.set(x, y, z);
      nodesGroup.add(node);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Connect some nodes with subtle thin lines (regulatory dependency vectors)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.25 });
    for (let i = 0; i < nodePositions.length - 1; i += 2) {
      const points = [nodePositions[i], nodePositions[i + 1]];
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeom, lineMat);
      nodesGroup.add(line);
    }

    // LIGHTING SYSTEM
    // Left: Warm Industrial Orange Key Light (facing from the orange half of the split)
    const orangeKeyLight = new THREE.DirectionalLight(0xFF9D1C, 3.2);
    orangeKeyLight.position.set(-6, 3, 5);
    scene.add(orangeKeyLight);

    // Right: Cool Deep Technical Fill Light (facing from the dark charcoal half)
    const coolFillLight = new THREE.DirectionalLight(0xD4D4D8, 1.6);
    coolFillLight.position.set(6, -2, 4);
    scene.add(coolFillLight);

    // Top Rim Light: Sculptural silhouette definition
    const topRimLight = new THREE.DirectionalLight(0xFFFFFF, 1.8);
    topRimLight.position.set(0, 8, -4);
    scene.add(topRimLight);

    // Soft Ambient Light for shadow depth
    const ambientLight = new THREE.AmbientLight(0x1F1F1F, 1.2);
    scene.add(ambientLight);

    setIsLoaded(true);

    // Interactive pointer response
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.45;
      targetRotationX = mouseY * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      // Adjust camera distance for mobile responsiveness
      if (newWidth < 768) {
        camera.position.z = 10.5;
      } else {
        camera.position.z = 8.5;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow elegant rotation + subtle bobbing
      coreGroup.rotation.y += 0.0035;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.6) * 0.08 + (targetRotationX - coreGroup.rotation.x) * 0.05;
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.04;
      coreGroup.position.y = Math.sin(elapsedTime * 1.1) * 0.14;

      // Subtle pulse in the node group
      nodesGroup.rotation.y -= 0.002;
      nodesGroup.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onObjectClick}
      className={`relative w-full h-full select-none cursor-pointer overflow-hidden ${className}`}
      aria-label="3D Compliance Intelligence Core: abstract sculptural representation of Bureau of Indian Standards"
      role="img"
    >
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-72 border border-white/20 bg-[#161616]/90 shadow-2xl rounded-sm p-6 flex flex-col justify-between">
            <div className="text-[10px] tracking-widest uppercase text-[#FF9D1C] font-mono-tech">
              Core Invariant
            </div>
            <div className="space-y-2">
              <div className="h-0.5 w-12 bg-[#FF9D1C]" />
              <div className="text-sm font-semibold tracking-wide text-white">IS 2347 / QCO 2016</div>
              <div className="text-xs text-zinc-400">Bureau of Indian Standards Architecture Core</div>
            </div>
            <div className="text-[9px] text-zinc-500 font-mono-tech">STATUS: VERIFIED</div>
          </div>
        </div>
      )}

      {/* Subtle indicator for interactive object */}
      {isLoaded && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-center">
          <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-mono-tech opacity-75">
            COMPLIANCE INTELLIGENCE CORE · ROTATE / INTERACT
          </span>
        </div>
      )}
    </div>
  );
};
