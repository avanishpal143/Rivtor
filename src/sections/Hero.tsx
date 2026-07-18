import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { MagneticButton } from '../components/MagneticButton';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x2e5bff, 1.5);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 2, 50);
    pointLight.position.set(-10, -5, 5);
    scene.add(pointLight);

    // 3. Materials
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2e5bff,
      metalness: 0.1,
      roughness: 0.2,
      transparent: true,
      opacity: 0.6,
      transmission: 0.6,
      side: THREE.DoubleSide,
    });

    const violetMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      metalness: 0.2,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
      transmission: 0.4,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xbfa5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    // 4. Mesh Groups
    const group = new THREE.Group();
    scene.add(group);

    // Create cloud nodes (spheres connected by lines)
    const nodesGroup = new THREE.Group();
    group.add(nodesGroup);

    const nodeCount = 12;
    const nodePositions: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    const sphereGeom = new THREE.SphereGeometry(0.2, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x2e5bff });

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(sphereGeom, nodeMat);
      nodeMesh.position.copy(pos);
      nodesGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
    }

    // Connect nodes with lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xe8edf7,
      transparent: true,
      opacity: 0.3,
    });

    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 5) {
          linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    nodesGroup.add(lines);

    // Floating server cubes and cylinders
    const serverGroup = new THREE.Group();
    group.add(serverGroup);

    // Box 1 (Core platform)
    const boxGeom = new THREE.BoxGeometry(2, 1.5, 2);
    const serverBox = new THREE.Mesh(boxGeom, glassMaterial);
    serverBox.position.set(-2, 2, -2);
    serverGroup.add(serverBox);

    const boxWire = new THREE.Mesh(boxGeom, wireframeMaterial);
    boxWire.scale.setScalar(1.05);
    serverBox.add(boxWire);

    // Box 2 (Gateway)
    const serverBox2 = new THREE.Mesh(boxGeom, violetMaterial);
    serverBox2.position.set(3, -2, -1);
    serverGroup.add(serverBox2);

    const boxWire2 = new THREE.Mesh(boxGeom, wireframeMaterial);
    boxWire2.scale.setScalar(1.05);
    serverBox2.add(boxWire2);

    // Cylinders (Databases)
    const cylGeom = new THREE.CylinderGeometry(0.8, 0.8, 1.6, 32);
    const dbCylinder = new THREE.Mesh(cylGeom, glassMaterial);
    dbCylinder.position.set(2, 3, 2);
    serverGroup.add(dbCylinder);

    const dbCylinder2 = new THREE.Mesh(cylGeom, violetMaterial);
    dbCylinder2.position.set(-3, -3, 2);
    serverGroup.add(dbCylinder2);

    // Particle Cloud (Network flow)
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 15;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    group.add(particles);

    // 5. Mouse Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      // Get normalized coordinate [-1, 1]
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Spin elements
      group.rotation.y = elapsedTime * 0.08;
      nodesGroup.rotation.x = elapsedTime * 0.04;
      serverBox.rotation.y = elapsedTime * 0.2;
      serverBox.rotation.x = elapsedTime * 0.15;
      serverBox2.rotation.y = -elapsedTime * 0.25;
      dbCylinder.rotation.y = elapsedTime * 0.3;
      dbCylinder2.rotation.y = -elapsedTime * 0.15;

      // Bobbing floating motion
      serverBox.position.y = 2 + Math.sin(elapsedTime * 1.5) * 0.25;
      serverBox2.position.y = -2 + Math.cos(elapsedTime * 1.2) * 0.25;
      dbCylinder.position.y = 3 + Math.cos(elapsedTime * 1.8) * 0.2;
      dbCylinder2.position.y = -3 + Math.sin(elapsedTime * 1.6) * 0.2;

      // Mouse Parallax effect interpolation
      targetX = mouseX * 2.5;
      targetY = mouseY * 2.5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-between overflow-hidden blueprint-grid pb-12 pt-28 lg:pt-0"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-70 pointer-events-none" />
      
      {/* Radial lighting glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-radial from-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-radial from-secondary/5 to-transparent blur-3xl pointer-events-none" />

      {/* Massive Faded AB Monogram in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <h1 className="text-[35vw] lg:text-[45vw] font-black text-border-brand/40 tracking-tighter opacity-70">
          AB
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Brand Storytelling */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-blue border border-primary/20 text-primary font-medium text-xs tracking-wider uppercase w-fit">
            <span>Enterprise Engineering Brand</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-text-brand max-w-xl">
            Engineering Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Infrastructure</span> That Grows With Your Business
          </h1>

          <p className="text-lg text-body-brand leading-relaxed max-w-lg">
            Modern businesses demand technology that is secure, scalable, and built for long-term growth. Rivtor AB helps organizations transform complex ideas into reliable software platforms through strategic engineering, cloud-native development, and enterprise technology consulting.
          </p>

          {/* Trust Ticks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
            {[
              "Enterprise Software Development",
              "Cloud Engineering",
              "Digital Transformation",
              "Technology Consulting",
              "Enterprise Architecture"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-body-brand font-medium">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                  <FiCheck size={12} />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <MagneticButton 
              variant="primary" 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Schedule a Consultation</span>
              <FiArrowRight />
            </MagneticButton>
            
            <MagneticButton 
              variant="secondary"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Discuss Your Project</span>
            </MagneticButton>
          </div>

          {/* Sweden Trust Badge */}
          <div className="pt-6 border-t border-border-brand/60 flex items-center gap-3 text-xs text-muted-brand">
            <span className="w-2.5 h-2.5 rounded-full bg-success-brand animate-pulse" />
            <span>Operational HQ: Sweden • Engineering Globally</span>
          </div>
        </motion.div>

        {/* Right Side: Interactive 3D Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Subtle glow behind canvas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent blur-3xl rounded-full" />
          <canvas 
            ref={canvasRef} 
            className="w-full h-full cursor-grab active:cursor-grabbing" 
          />
        </motion.div>
      </div>
    </section>
  );
};
