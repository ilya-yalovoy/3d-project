import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OBJLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/OBJLoader.js';


//настройка сцены
const scene = new THREE.Scene({color: 0xffffff});

//настройка камеры
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);


//визуализатор
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement)


//свет
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)


//audi rs7 
var audi;

let loader = new OBJLoader();
loader.load('./source/AudiRS7_2020_obj/AudiRS7_2020_obj/Audi_RS7_2020_hi.obj', (geometry) => {
    audi = geometry.scene;

    audi.position.z = -160
    audi.rotation.x = 0.2

    scene.add(audi)
    animate()
}, undefined, (error) => {
    console.error(err);
    console.error(err);
})



function animate() {
    requestAnimationFrame(animate);

    audi.rotation.y+= -0.002

    renderer.render(scene, camera)
}

