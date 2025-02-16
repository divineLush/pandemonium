import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight())
scene.add(new THREE.DirectionalLight())
scene.fog = new THREE.Fog('#ffa2ff', 150, 250)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const color = '#ff8eff'
const rotation = 90 * (Math.PI / 180)
const shininess = 80

const torus = (...args) => {
  const geometry = new THREE.TorusGeometry(...args)
  const material = new THREE.MeshPhongMaterial({ color, shininess })

  return new THREE.Mesh(geometry, material)
}

const cylinder = (...args) => {
  const geometry = new THREE.CylinderGeometry(...args)
  const material = new THREE.MeshPhongMaterial({ color, shininess })

  return new THREE.Mesh(geometry, material)
}

const tor = torus(3, 1, 30, 100)
tor.position.set(-55.5, 0, 0)

const tor1 = torus(3, 1, 30, 100)
tor1.position.set(55.5, 0, 0)

const tor2 = torus(3, 1, 30, 100)
tor2.position.set(48, -48.5, 0)

const tor3 = torus(3, 1, 30, 100)
tor3.position.set(42, 18.5, 0)

const tor4 = torus(3, 1, 30, 100)
tor4.position.set(12, 18.5, 0)

const tor5 = torus(3, 1, 30, 100)
tor5.position.set(67.5, -27.5, 0)

const tor6 = torus(3, 1, 30, 100)
tor6.position.set(66.5, 27.5, 0)

// VERTICAL CYLINDERS
const cylinder0 = cylinder(1, 1, 104, 60)
cylinder0.rotateZ(rotation)

const cylinder1 = cylinder(1, 1, 45, 60)
cylinder1.position.set(-48, -7.5, 0)

const cylinder2 = cylinder(1, 1, 75, 60)
cylinder2.position.set(48, -7.5, 0)

const cylinder3 = cylinder(1, 1, 60, 60)
cylinder3.position.set(36, 0, 0)

const cylinder4 = cylinder(1, 1, 60, 60)
cylinder4.position.set(20, 0, 0)

const cylinder5 = cylinder(1, 1, 60, 60)
cylinder5.position.set(4, 0, 0)

const cylinder6 = cylinder(1, 1, 60, 60)
cylinder6.position.set(-12, 0, 0)

const cylinder7 = cylinder(1, 1, 15, 60)
cylinder7.position.set(42, 7.5, 0)

const cylinder8 = cylinder(1, 1, 15, 60)
cylinder8.position.set(12, 7.5, 0)

const cylinder16 = cylinder(1, 1, 15, 60)
cylinder16.position.set(-31, 7.5, 0)

// HORIZONTAL CYLINDERS
const cylinder9 = cylinder(1, 1, 17.5, 60)
cylinder9.position.set(28, 30, 0)
cylinder9.rotateZ(rotation)

const cylinder10 = cylinder(1, 1, 17.5, 60)
cylinder10.position.set(-4, 30, 0)
cylinder10.rotateZ(rotation)

const cylinder11 = cylinder(1, 1, 17.5, 60)
cylinder11.position.set(12, -30, 0)
cylinder11.rotateZ(rotation)

const cylinder12 = cylinder(1, 1, 30, 60)
cylinder12.position.set(50.3, -30, 0)
cylinder12.rotateZ(rotation)

const cylinder13 = cylinder(1, 1, 17.5, 60)
cylinder13.position.set(56, 30, 0)
cylinder13.rotateZ(rotation)

const cylinder14 = cylinder(1, 1, 37, 60)
cylinder14.position.set(-29.8, -30, 0)
cylinder14.rotateZ(rotation)

const cylinder15 = cylinder(1, 1, 17.5, 60)
cylinder15.position.set(-39.3, 15, 0)
cylinder15.rotateZ(rotation)

const cylinder19 = cylinder(1, 1, 24, 60)
cylinder19.position.set(-39, 27.5, 0)
cylinder19.rotateZ(rotation)

// DIAGONAL CYLINDERS
const cylinder17 = cylinder(1, 1, 18.5, 60)
cylinder17.position.set(-44, 21, 0)
cylinder17.rotateZ(45 * (Math.PI / 180))

const cylinder18 = cylinder(1, 1, 18.5, 60)
cylinder18.position.set(-34, 21, 0)
cylinder18.rotateZ(-45 * (Math.PI / 180))

camera.position.z = 170

const group = new THREE.Group()

group.add(tor)
group.add(tor1)
group.add(tor2)
group.add(tor3)
group.add(tor4)
group.add(tor5)
group.add(tor6)

group.add(cylinder0)
group.add(cylinder1)
group.add(cylinder2)
group.add(cylinder3)
group.add(cylinder4)
group.add(cylinder5)
group.add(cylinder6)
group.add(cylinder7)
group.add(cylinder8)

group.add(cylinder9)
group.add(cylinder10)
group.add(cylinder11)
group.add(cylinder12)
group.add(cylinder13)
group.add(cylinder14)
group.add(cylinder15)
group.add(cylinder16)
group.add(cylinder17)
group.add(cylinder18)
group.add(cylinder19)

scene.add(group)

const animate = () => {
  group.rotation.x += 0.0004
  group.rotation.y += 0.002

	renderer.render(scene, camera)

}
// renderer.render(scene, camera)

renderer.setAnimationLoop(animate)
