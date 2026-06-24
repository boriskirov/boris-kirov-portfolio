import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BillboardParticles({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, material;
    let geometry, sprite, particles, interactionPlane;
    let interactionPlaneGeometry, interactionPlaneMaterial;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;

    // levitation
    let lastFrameTime = performance.now();
    const levitationSpeed = 22; // units per second upward

    // cursor → world
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const cursorWorld = new THREE.Vector3();
    let hasCursor = false;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handlePointerMove = (event) => {
      if (!interactionPlane || !camera) return;
      onPointerMove(event, interactionPlane);
    };

    function init() {
      // Camera
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000,
      );
      camera.position.z = 1000;

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);

      // Geometry & vertices
      geometry = new THREE.BufferGeometry();
      const vertices = [];

      // Sprite: small, white → light blue, glowy
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

      const count = 10000;
      for (let i = 0; i < count; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;
        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3),
      );

      // Material: small, pale blue, additive glow
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

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Invisible plane for raycasting (at z = 0)
      interactionPlaneGeometry = new THREE.PlaneGeometry(4000, 4000);
      interactionPlaneMaterial = new THREE.MeshBasicMaterial({
        visible: false,
      });
      interactionPlane = new THREE.Mesh(
        interactionPlaneGeometry,
        interactionPlaneMaterial,
      );
      interactionPlane.position.z = 0;
      scene.add(interactionPlane);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Events
      window.addEventListener("pointermove", handlePointerMove);
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

    function onPointerMove(event, interactionPlane) {
      if (event.isPrimary === false) return;

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;

      // update cursorWorld via raycast
      pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(interactionPlane);
      if (intersects.length > 0) {
        cursorWorld.copy(intersects[0].point);
        hasCursor = true;
      }
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      render();
    }

    function render() {
      const now = performance.now();
      const delta = (now - lastFrameTime) / 1000; // seconds
      lastFrameTime = now;

      // camera parallax based on cursor
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // positions
      const posAttr = geometry.getAttribute("position");
      const posArray = posAttr.array;

      // 1) global levitation (slow upward drift + wrap)
      const dy = levitationSpeed * delta;
      for (let i = 1; i < posArray.length; i += 3) {
        posArray[i] += dy;
        if (posArray[i] > 1000) posArray[i] = -1000; // wrap around
      }

      // 2) attraction: particles near cursor move slightly toward it
      if (hasCursor) {
        const radius = 400;
        const radiusSq = radius * radius;
        const strength = 0.25; // how strongly they’re pulled

        for (let i = 0; i < posArray.length; i += 3) {
          const x = posArray[i];
          const y = posArray[i + 1];
          const z = posArray[i + 2];

          const dx = cursorWorld.x - x;
          const dyA = cursorWorld.y - y;
          const dz = cursorWorld.z - z;

          const distSq = dx * dx + dyA * dyA + dz * dz;
          if (distSq > 0 && distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / radius; // closer = stronger
            const influence = strength * falloff * delta;

            posArray[i] += (dx / dist) * influence;
            posArray[i + 1] += (dyA / dist) * influence;
            posArray[i + 2] += (dz / dist) * influence;
          }
        }
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    init();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", onWindowResize);

      if (particles) scene?.remove(particles);
      if (interactionPlane) scene?.remove(interactionPlane);
      if (geometry) geometry.dispose();
      if (interactionPlaneGeometry) interactionPlaneGeometry.dispose();
      if (interactionPlaneMaterial) interactionPlaneMaterial.dispose();
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
