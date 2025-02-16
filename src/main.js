import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
scene.background = new THREE.Color('#180018')
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

const pill = (...args) => {
  const geometry = new THREE.CapsuleGeometry(...args)
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
tor5.position.set(64, -26.8, 0)

const tor6 = torus(3, 1, 30, 100)
tor6.position.set(64, 26.8, 0)

// VERTICAL pillS
const pill0 = pill(1, 104, 32, 64)
pill0.rotateZ(rotation)

const pill1 = pill(1, 45, 32, 64)
pill1.position.set(-48, -7.5, 0)

const pill2 = pill(1, 75, 32, 64)
pill2.position.set(48, -7.5, 0)

const pill3 = pill(1, 60, 32, 64)
pill3.position.set(36, 0, 0)

const pill4 = pill(1, 60, 32, 64)
pill4.position.set(20, 0, 0)

const pill5 = pill(1, 60, 32, 64)
pill5.position.set(4, 0, 0)

const pill6 = pill(1, 60, 32, 64)
pill6.position.set(-12, 0, 0)

const pill7 = pill(1, 15, 32, 64)
pill7.position.set(42, 7.5, 0)

const pill8 = pill(1, 15, 32, 64)
pill8.position.set(12, 7.5, 0)

const pill16 = pill(1, 15, 32, 64)
pill16.position.set(-31, 7.5, 0)

// HORIZONTAL pillS
const pill9 = pill(1, 15.5, 32, 64)
pill9.position.set(28, 30, 0)
pill9.rotateZ(rotation)

const pill10 = pill(1, 15.5, 32, 64)
pill10.position.set(-4, 30, 0)
pill10.rotateZ(rotation)

const pill11 = pill(1, 15.5, 32, 64)
pill11.position.set(12, -30, 0)
pill11.rotateZ(rotation)

const pill12 = pill(1, 28, 32, 64)
pill12.position.set(50, -30, 0)
pill12.rotateZ(rotation)

const pill13 = pill(1, 15.5, 32, 64)
pill13.position.set(56, 30, 0)
pill13.rotateZ(rotation)

const pill14 = pill(1, 35, 32, 64)
pill14.position.set(-30, -30, 0)
pill14.rotateZ(rotation)

const pill15 = pill(1, 16.5, 32, 64)
pill15.position.set(-39.3, 15, 0)
pill15.rotateZ(rotation)

const pill19 = pill(1, 26, 32, 64)
pill19.position.set(-39, 28.5, 0)
pill19.rotateZ(rotation)

// DIAGONAL pillS
const pill17 = pill(1, 17.5, 32, 64)
pill17.position.set(-46, 22, 0)
pill17.rotateZ(45 * (Math.PI / 180))

const pill18 = pill(1, 17.5, 32, 64)
pill18.position.set(-32, 22, 0)
pill18.rotateZ(-45 * (Math.PI / 180))

camera.position.z = 170

const group = new THREE.Group()

group.add(tor)
group.add(tor1)
group.add(tor2)
group.add(tor3)
group.add(tor4)
group.add(tor5)
group.add(tor6)

group.add(pill0)
group.add(pill1)
group.add(pill2)
group.add(pill3)
group.add(pill4)
group.add(pill5)
group.add(pill6)
group.add(pill7)
group.add(pill8)

group.add(pill9)
group.add(pill10)
group.add(pill11)
group.add(pill12)
group.add(pill13)
group.add(pill14)
group.add(pill15)
group.add(pill16)
group.add(pill17)
group.add(pill18)
group.add(pill19)

scene.add(group)

const animate = () => {
  group.rotation.x += 0.0004
  group.rotation.y += 0.002

	renderer.render(scene, camera)

}
// renderer.render(scene, camera)

renderer.setAnimationLoop(animate)
