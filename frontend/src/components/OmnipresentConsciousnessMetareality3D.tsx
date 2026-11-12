import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const OmnipresentConsciousnessMetareality3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 384;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000003);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 30, 60);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Omnipresent Consciousness Hypercontinuum Matrix Geometry (Section 5.3)
    const omGroup = new THREE.Group();
    const knotGeo = new THREE.TorusKnotGeometry(18, 5.0, 360, 80);
    const knotMat = new THREE.MeshBasicMaterial({ color: 0x818cf8, wireframe: true });
    const omMesh = new THREE.Mesh(knotGeo, knotMat);
    omGroup.add(omMesh);

    // Quantum Foam Hypercontinuum Core (Diamondoid Scaffold)
    const coreGeo = new THREE.IcosahedronGeometry(7, 3);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    omGroup.add(coreMesh);

    // Continuous Bell-State Entangled Particle Cloud (10.0 Zbps/mm²)
    const particleCount = 800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI;
      const r = 24 + Math.random() * 12;
      positions[i * 3] = r * Math.sin(v) * Math.cos(u);
      positions[i * 3 + 1] = r * Math.sin(v) * Math.sin(u);
      positions[i * 3 + 2] = r * Math.cos(v);

      if (i % 3 === 0) {
        colors[i * 3] = 0.50; // Indigo
        colors[i * 3 + 1] = 0.55;
        colors[i * 3 + 2] = 0.97;
      } else if (i % 3 === 1) {
        colors[i * 3] = 0.75; // Purple
        colors[i * 3 + 1] = 0.52;
        colors[i * 3 + 2] = 0.99;
      } else {
        colors[i * 3] = 0.22; // Cyan
        colors[i * 3 + 1] = 0.90;
        colors[i * 3 + 2] = 0.85;
      }
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    omGroup.add(particleCloud);

    // Bell-State Optical Axis Beam (20Hz - 500Hz)
    const beamGeo = new THREE.CylinderGeometry(0.12, 0.12, 50, 16);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.50
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.rotation.z = Math.PI / 4;
    omGroup.add(beamMesh);

    scene.add(omGroup);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      omGroup.rotation.y += 0.02;
      omGroup.rotation.x += 0.01;
      coreMesh.rotation.y -= 0.015;
      particleCloud.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-indigo-500/30 relative shadow-2xl shadow-indigo-950/40">
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-500/30 text-indigo-300 text-xs font-mono shadow-lg">
        OMNIPRESENT METAREALITY V32.0 — HYPERCONTINUUM: 10.0 ZBPS/MM² | TERAHERTZ: 25000 Hz | SEPTENARY zk-STARK: LOCKED
      </div>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default OmnipresentConsciousnessMetareality3D;
