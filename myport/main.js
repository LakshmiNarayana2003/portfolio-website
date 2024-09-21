import * as THREE from 'three'
import "./style.css"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene()

// Create our shape
const geometry = new THREE.SphereGeometry(3, 65, 65)
const material = new THREE.MeshStandardMaterial( { color: 0x3D10B4 } ) 
const mesh = new THREE.Mesh( geometry, material)
scene.add(mesh)

//Size
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight,
}

// Light
const light = new THREE.PointLight(0xffffff, 300, 100)
light.position.set(0, 10, 10)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100) // Added near and far clipping planes
camera.position.z = 20
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width , sizes.height)
renderer.setClearColor(0xFFE9D0, 1); // Set the background color to white
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
const Controls = new OrbitControls(camera, canvas)
Controls.enableDamping = true
Controls.enablePan = false
Controls.enableZoom = false
Controls.autoRotate = true
Controls.autoRotateSpeed = 10


//Resize
window.addEventListener("resize", () => {
    // console.log(window.innerWidth)
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)

})


const loop = () => {
    Controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()

document.querySelector('.button_button__dZRSb').addEventListener('click', function() {
    this.classList.toggle('reveal');
});
