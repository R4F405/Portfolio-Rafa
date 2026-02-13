// public/script.js

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.025); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 2.5; 
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById('canvas-container');
if (container.children.length === 0) {
    container.appendChild(renderer.domElement);
}

// --- 1. Terreno Wireframe ---
const planeGeo = new THREE.PlaneGeometry(100, 100, 40, 40);
planeGeo.rotateX(-Math.PI / 2); 

const planeMat = new THREE.MeshBasicMaterial({
    color: 0x7000ff, 
    wireframe: true,
    transparent: true,
    opacity: 0.12 
});

const plane = new THREE.Mesh(planeGeo, planeMat);
scene.add(plane);
const planePositions = planeGeo.attributes.position.array;

// --- 2. Nodos de Datos (Partículas) ---
const particlesCount = 150; 
const particlesGeo = new THREE.BufferGeometry();
const posArray = new Float32Array(particlesCount * 3);
const velocities = []; 

for(let i = 0; i < particlesCount; i++) {
    posArray[i * 3] = (Math.random() - 0.5) * 40;     
    posArray[i * 3 + 1] = Math.random() * 15;         
    posArray[i * 3 + 2] = (Math.random() - 0.5) * 40; 

    // VELOCIDAD REDUCIDA UN 50% PARA MAYOR ELEGANCIA
    velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: 0.005 + Math.random() * 0.01,
        z: (Math.random() - 0.5) * 0.01
    });
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMat = new THREE.PointsMaterial({
    size: 0.08,
    color: 0x00ff88, 
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending 
});

const particles = new THREE.Points(particlesGeo, particlesMat);
scene.add(particles);

// --- 3. Red Plexus ---
const linesMat = new THREE.LineBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.15, 
    blending: THREE.AdditiveBlending
});

const maxLines = particlesCount * particlesCount;
const linePositions = new Float32Array(maxLines * 6); 
const linesGeo = new THREE.BufferGeometry();
linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
scene.add(linesMesh);

// --- 4. Interacción con el ratón ---
let mouseX = 0;
let mouseY = 0;
const windowHalfX = window.innerWidth / 2;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) * 0.003;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.003;
});

// --- 5. Loop de Animación ---
const clock = new THREE.Clock();

const animate = () => {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // 5.1 Animar el terreno
    for (let i = 0; i < planePositions.length; i += 3) {
        const x = planePositions[i];
        const z = planePositions[i + 2]; 
        const distFromCenter = Math.abs(x);
        
        if (distFromCenter > 7) {
            // VELOCIDAD DEL TERRENO REDUCIDA (time * 1.5 en lugar de time * 3)
            const wave1 = Math.sin(x * 0.2 + time * 0.5);
            const wave2 = Math.cos(z * 0.2 - time * 1.5); 
            const height = (wave1 + wave2) * (distFromCenter - 7) * 0.15;
            planePositions[i + 1] = height; 
        } else {
            planePositions[i + 1] = 0; 
        }
    }
    planeGeo.attributes.position.needsUpdate = true;

    // 5.2 Animar partículas y calcular conexiones Plexus
    const pPositions = particles.geometry.attributes.position.array;
    let lineIndex = 0;
    let numConnected = 0;

    for (let i = 0; i < particlesCount; i++) {
        pPositions[i * 3] += velocities[i].x;
        pPositions[i * 3 + 1] += velocities[i].y;
        pPositions[i * 3 + 2] += velocities[i].z;

        if (pPositions[i * 3 + 1] > 15) pPositions[i * 3 + 1] = 0;
        if (pPositions[i * 3] > 20 || pPositions[i * 3] < -20) velocities[i].x *= -1; 
        if (pPositions[i * 3 + 2] > 20 || pPositions[i * 3 + 2] < -20) velocities[i].z *= -1; 

        for (let j = i + 1; j < particlesCount; j++) {
            const dx = pPositions[i * 3] - pPositions[j * 3];
            const dy = pPositions[i * 3 + 1] - pPositions[j * 3 + 1];
            const dz = pPositions[i * 3 + 2] - pPositions[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < 15) {
                linePositions[lineIndex++] = pPositions[i * 3];
                linePositions[lineIndex++] = pPositions[i * 3 + 1];
                linePositions[lineIndex++] = pPositions[i * 3 + 2];

                linePositions[lineIndex++] = pPositions[j * 3];
                linePositions[lineIndex++] = pPositions[j * 3 + 1];
                linePositions[lineIndex++] = pPositions[j * 3 + 2];

                numConnected++;
            }
        }
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
    linesGeo.setDrawRange(0, numConnected * 2); 
    linesGeo.attributes.position.needsUpdate = true;

    // 5.3 Movimiento de cámara 
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 2 + 2.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 2.5, 0);

    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});