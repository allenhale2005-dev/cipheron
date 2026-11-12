import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface TacticalPipelineNode {
  id: string;
  label: string;
  algorithm: string;
  confidence: number;
  entropy: number;
  position: [number, number, number];
}

const DEFAULT_SAMPLE_PIPELINE: TacticalPipelineNode[] = [
  { id: 'n0', label: 'INPUT', algorithm: 'Raw Octet Stream', confidence: 1.0, entropy: 7.82, position: [-12, 0, 0] },
  { id: 'n1', label: 'STAGE 1', algorithm: 'Base64 RFC 4648', confidence: 0.98, entropy: 5.12, position: [-4, 3, 0] },
  { id: 'n2', label: 'STAGE 2', algorithm: 'Single-Byte XOR (0x7F)', confidence: 0.89, entropy: 4.41, position: [4, 3, 0] },
  { id: 'n3', label: 'STAGE 3', algorithm: 'ROT13 Caesar Variant', confidence: 0.96, entropy: 4.02, position: [12, 0, 0] },
  { id: 'n4', label: 'ALT 2', algorithm: 'Hex Delimited Stream', confidence: 0.32, entropy: 6.21, position: [-4, -3, 0] },
];

interface TacticalCryptanalysis3DProps {
  nodes?: TacticalPipelineNode[];
  onSelectNode?: (node: TacticalPipelineNode) => void;
}

export const TacticalCryptanalysis3D: React.FC<TacticalCryptanalysis3DProps> = ({
  nodes = DEFAULT_SAMPLE_PIPELINE,
  onSelectNode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene, Camera, and Hardware-Accelerated Renderer
    const width = containerRef.current.clientWidth || 800;
    const height = containerRef.current.clientHeight || 320;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070507); // Rose Black Chassis Base (#070507)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Tactical Subtle Grid Floor (DRDO Command Center Aesthetic)
    const gridHelper = new THREE.GridHelper(40, 20, 0x241822, 0x0F0A0E);
    gridHelper.position.y = -8;
    scene.add(gridHelper);

    // 3. Node Mesh Geometry & Link Visualizer
    const graphGroup = new THREE.Group();
    const nodeGeometry = new THREE.BoxGeometry(2.4, 1.2, 0.6);

    const nodesMap = new Map<string, THREE.Mesh>();
    const nodeDataMap = new Map<THREE.Mesh, TacticalPipelineNode>();

    nodes.forEach((node) => {
      const isHighConfidence = node.confidence >= 0.85;
      const material = new THREE.MeshBasicMaterial({
        color: isHighConfidence ? 0x38BDF8 : 0xF97316, // Median Sky vs. Solar Orange
        wireframe: true,
      });

      const mesh = new THREE.Mesh(nodeGeometry, material);
      mesh.position.set(...node.position);
      nodesMap.set(node.id, mesh);
      nodeDataMap.set(mesh, node);
      graphGroup.add(mesh);
    });

    // 4. Connect Primary Hypothesis Edges
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.6,
    });

    const edges: [string, string][] = [
      ['n0', 'n1'],
      ['n1', 'n2'],
      ['n2', 'n3'],
      ['n0', 'n4'],
    ];

    edges.forEach(([fromId, toId]) => {
      const fromNode = nodesMap.get(fromId);
      const toNode = nodesMap.get(toId);
      if (fromNode && toNode) {
        const points = [fromNode.position, toNode.position];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeo, lineMaterial);
        graphGroup.add(line);
      }
    });

    scene.add(graphGroup);

    // 5. Smooth Spring-Damped Interaction Loop
    let animationFrameId: number;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;
      targetRotationY = x * 0.15;
      targetRotationX = y * 0.1;
    };

    const onClick = (e: MouseEvent) => {
      if (!onSelectNode) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / width) * 2 - 1,
        -((e.clientY - rect.top) / height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(Array.from(nodesMap.values()));
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const nodeData = nodeDataMap.get(clickedMesh);
        if (nodeData) {
          onSelectNode(nodeData);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('click', onClick);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Damped lerp rotation
      graphGroup.rotation.y += (targetRotationY - graphGroup.rotation.y) * 0.05;
      graphGroup.rotation.x += (targetRotationX - graphGroup.rotation.x) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', onClick);
        containerRef.current.innerHTML = '';
      }
      renderer.dispose();
    };
  }, [nodes, onSelectNode]);

  return (
    <div className="w-full h-80 bg-chassis-dark rounded-sm border border-chassis-border relative overflow-hidden">
      {/* Top HUD Telemetry Overlay */}
      <div className="absolute top-2 left-3 z-10 flex items-center gap-3 font-mono text-[11px] text-rose-white tracking-widest pointer-events-none">
        <span className="flex items-center gap-1.5 text-sky-carrier font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-carrier animate-pulse" />
          SPATIAL DAG: ACTIVE
        </span>
        <span className="text-chassis-border">|</span>
        <span className="text-rose-muted">BRANCH CONFIDENCE: 96.4%</span>
        <span className="text-chassis-border">|</span>
        <span className="text-orange-alert">ENTROPY GRADIENT: NORMAL</span>
      </div>

      {/* Canvas Mount Container */}
      <div ref={containerRef} className="w-full h-full cursor-crosshair" />

      {/* Bottom HUD Dimension Tag */}
      <div className="absolute bottom-2 right-3 z-10 font-mono text-[10px] text-rose-dim pointer-events-none">
        PROJECTION: PERSPECTIVE (45°) // LATENCY: 0.14ms // ENGINE: THREE.JS WEBGL
      </div>
    </div>
  );
};

export default TacticalCryptanalysis3D;
