import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight())
scene.add(new THREE.DirectionalLight(0xffffff, 0.7))
scene.fog = new THREE.Fog('#fff0ff', 150, 250)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const color = '#ff8eff'

const torus = (...args) => {
  const geometry = new THREE.TorusGeometry(...args)
  const material = new THREE.MeshLambertMaterial({ color })

  return new THREE.Mesh(geometry, material)
}

const cylinder = (...args) => {
  const geometry = new THREE.CylinderGeometry(...args)
  const material = new THREE.MeshLambertMaterial({ color })

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

// VERTICAL CYLINDERS
const cylinder0 = cylinder(1, 1, 104, 40)
cylinder0.rotateZ(90 * (Math.PI / 180))

const cylinder1 = cylinder(1, 1, 45, 40)
cylinder1.position.set(-48, -7.5, 0)

const cylinder2 = cylinder(1, 1, 75, 40)
cylinder2.position.set(48, -7.5, 0)

const cylinder3 = cylinder(1, 1, 60, 40)
cylinder3.position.set(36, 0, 0)

const cylinder4 = cylinder(1, 1, 60, 40)
cylinder4.position.set(20, 0, 0)

const cylinder5 = cylinder(1, 1, 60, 40)
cylinder5.position.set(4, 0, 0)

const cylinder6 = cylinder(1, 1, 60, 40)
cylinder6.position.set(-12, 0, 0)

const cylinder7 = cylinder(1, 1, 15, 40)
cylinder7.position.set(42, 7.5, 0)

const cylinder8 = cylinder(1, 1, 15, 40)
cylinder8.position.set(12, 7.5, 0)

// HORIZONTAL CYLINDERS
const cylinder9 = cylinder(1, 1, 17.5, 40)
cylinder9.position.set(28, 30, 0)
cylinder9.rotateZ(90 * (Math.PI / 180))

const cylinder10 = cylinder(1, 1, 17.5, 40)
cylinder10.position.set(-4, 30, 0)
cylinder10.rotateZ(90 * (Math.PI / 180))

camera.position.z = 110

const group = new THREE.Group()

group.add(tor)
group.add(tor1)
group.add(tor2)
group.add(tor3)
group.add(tor4)

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

scene.add(group)

const animate = () => {
  const value = 0.001
  group.rotation.x += value
  group.rotation.y += value

	renderer.render(scene, camera)

}

renderer.setAnimationLoop(animate)
