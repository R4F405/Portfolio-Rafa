// Configuración Three.js (Fondo de partículas sutil)
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.02);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Partículas
const geometry = new THREE.BufferGeometry();
const counts = 2500;
const positions = new Float32Array(counts * 3);

for(let i = 0; i < counts * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Material de las partículas (Verde Neón)
const material = new THREE.PointsMaterial({
    size: 0.04,
    color: 0x00ff88,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Objeto geométrico abstracto de fondo (Torus Knot)
const geoShape = new THREE.TorusKnotGeometry(12, 3, 100, 16);
const matShape = new THREE.MeshBasicMaterial({ 
    color: 0x7000ff, // Violeta
    wireframe: true, 
    transparent: true, 
    opacity: 0.04 
});
const torus = new THREE.Mesh(geoShape, matShape);
torus.position.z = -15;
torus.position.x = 15;
scene.add(torus);

camera.position.z = 10;

let mouseX = 0;
let mouseY = 0;

// Evento Mouse
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
});

// Loop de animación
const animate = function () {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0002;

    torus.rotation.x += 0.001;
    torus.rotation.y += 0.001;

    // Efecto Parallax suave
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
};

animate();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});