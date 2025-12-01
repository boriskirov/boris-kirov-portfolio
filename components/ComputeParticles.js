"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BillboardParticles({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, material;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;
    let geometry, sprite;

    // for levitation
    let lastPointerMoveTime = performance.now();
    let lastFrameTime = performance.now();
    const levitationSpeed = 2; // units per second (in world space) – very subtle

    const canvas = canvasRef.current;
    if (!canvas) return;

    function init() {
      // Camera
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000
      );
      camera.position.z = 1000;

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);

      // Geometry & vertices
      geometry = new THREE.BufferGeometry();
      const vertices = [];

      // --- Sprite: small, white center fading to light blue, slightly glowy ---
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = spriteCanvas.height = 64;
      const ctx = spriteCanvas.getContext("2d");
      ctx.clearRect(0, 0, 64, 64);

      const radius = 18;
      ctx.translate(32, 32);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0.0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(210,230,255,0.9)");
      gradient.addColorStop(1.0, "rgba(180,210,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      sprite = new THREE.CanvasTexture(spriteCanvas);
      sprite.colorSpace = THREE.SRGBColorSpace;

      // particles positions
      const count = 10000;
      for (let i = 0; i < count; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;
        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      // --- Material: smaller size, light blue-ish, additive glow ---
      material = new THREE.PointsMaterial({
        size: 12,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.2,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      material.color.set("#dbeafe");

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Events
      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onWindowResize);

      // Start loop
      lastFrameTime = performance.now();
      animate();
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return;

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;

      lastPointerMoveTime = performance.now(); // reset idle timer
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      render();
    }

    function render() {
      const now = performance.now();
      const delta = (now - lastFrameTime) / 1000; // seconds
      lastFrameTime = now;

      // camera reacts to cursor as before
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // --- Levitation: if cursor idle for a bit, slowly float particles upwards ---
      const idleTime = now - lastPointerMoveTime;
      const idleThreshold = 400; // ms before levitation kicks in

      if (idleTime > idleThreshold) {
        const posAttr = geometry.getAttribute("position");
        const posArray = posAttr.array;

        const dy = levitationSpeed * delta; // small step up this frame

        // move all particles up a tiny bit
        for (let i = 1; i < posArray.length; i += 3) {
          posArray[i] += dy;
        }

        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    init();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);

      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (sprite) sprite.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className={className ?? "fixed inset-0 pointer-events-none -z-10"}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}