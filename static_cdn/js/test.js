import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GLTFLoader } from "./GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// camera.zoom = 2.1
// camera.zoom = 1

const helper = new THREE.CameraHelper(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#webgl"),
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

let jar;
// loader.load('../static/assets/me/me.gltf', function (gltf) {
loader.load(
  "../static/assets/no_stars/my_face_no_stars.gltf",
  function (gltf) {
    jar = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

scene.background = new THREE.Color(0x000000);

const light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(light);
// camera.position.set(0, 6, -8)
// camera.position.set(0, 3.5, -4)
// camera.position.set(0, 3, -10)
camera.position.set(0, 3, 6);

var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 0.8);
// camera.add(pointLight);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;

function animate() {
  requestAnimationFrame(animate);

  if (jar) {
    jar.rotation.y += 0.01;
  }

  controls.update();

  renderer.render(scene, camera);
}

animate();
