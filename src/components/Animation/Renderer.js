import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

export function init(renderMount) {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10,
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  renderMount.appendChild(renderer.domElement);
}

export function createAnimation(startingState = 1) {
  let animationState = startingState;
  const animationHandlers = {
    animate: function spin() {
      if (animationState === 1) {
        requestAnimationFrame(spin);
      }

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
    },
    stopAnimation: function () {
      animationState = 0;
    },
    startAnimation: function () {
      if (animationState === 0) {
        animationState = 1;
        this.animate();
      }
    },
  };

  if (animationState === 1) {
    animationHandlers.animate();
  }

  return animationHandlers;
}
