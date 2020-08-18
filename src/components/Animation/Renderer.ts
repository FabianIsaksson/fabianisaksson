import * as THREE from 'three';

let camera: THREE.Camera;
let scene: THREE.Scene;
let renderer: THREE.Renderer;
let geometry: THREE.Geometry;
let material: THREE.Material;
let mesh: THREE.Mesh;

export function init(renderMount: HTMLDivElement) {
  camera = new THREE.PerspectiveCamera(
    80,
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
  renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);

  var light = new THREE.PointLight('a5f');
  light.position.set(25, 25, 25);
  scene.add(light);

  renderMount.appendChild(renderer.domElement);
}

export function createAnimation(startingState = 1) {
  let animationState = startingState;
  let direction = 0;
  const animationHandlers = {
    animate: function spin() {
      if (animationState === 1) {
        requestAnimationFrame(spin);
      }

      mesh.rotation.x += Math.PI / 180;
      mesh.rotation.y += Math.PI / 180;
      mesh.rotation.z += Math.PI / 180;

      if (mesh.position.x < 1 && [1, 0].includes(direction)) {
        const newPosition = mesh.position.x + 0.01;
        mesh.position.fromArray([newPosition, newPosition, 0]);
        if (newPosition >= 1) {
          direction = -1; // switch direction
        }
      } else if (direction === -1) {
        const newPosition = mesh.position.x - 0.01;
        mesh.position.fromArray([newPosition, newPosition, 0]);
        if (newPosition <= -1) {
          direction = 1;
        }
      }

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
