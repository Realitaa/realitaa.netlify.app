const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const objekSelect = document.getElementById('objek');
const omega0Input = document.getElementById('omega0');
const alphaInput = document.getElementById('alpha');
const radiusInput = document.getElementById('radius');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const waktuSpan = document.getElementById('waktu');
const omegaSpan = document.getElementById('omega');
const thetaSpan = document.getElementById('theta');
const putaranSpan = document.getElementById('putaran');
const vSpan = document.getElementById('v');

// Variabel simulasi
let animationId;
let t = 0;
let isRunning = false;

// Objek visual
const objekConfig = {
  kipas: { blades: 3, color: '#e74c3c', label: 'Kipas' },
  'roda-mobil': { spokes: 5, color: '#2c3e50', label: 'Roda Mobil' },
  bianglala: { cabins: 8, color: '#9b59b6', label: 'Bianglala' },
  sepeda: { spokes: 12, color: '#27ae60', label: 'Roda Sepeda' }
};

function drawObject(theta, config, r) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(theta);

  const obj = objekConfig[config];

  // Gambar lingkaran luar
  ctx.beginPath();
  ctx.arc(0, 0, r * 100, 0, Math.PI * 2);
  ctx.strokeStyle = '#34495e';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Gambar elemen berputar
  if (config === 'kipas') {
    for (let i = 0; i < obj.blades; i++) {
      ctx.rotate(2 * Math.PI / obj.blades);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r * 100, 0);
      ctx.lineTo(r * 80, -30);
      ctx.closePath();
      ctx.fillStyle = obj.color;
      ctx.fill();
    }
  } else if (config === 'bianglala') {
    for (let i = 0; i < obj.cabins; i++) {
      ctx.save();
      ctx.rotate(i * 2 * Math.PI / obj.cabins);
      ctx.fillStyle = obj.color;
      ctx.fillRect(-15, r * 100 - 20, 30, 30);
      ctx.restore();
    }
  } else {
    // Roda (mobil/sepeda)
    for (let i = 0; i < obj.spokes; i++) {
      ctx.rotate(2 * Math.PI / obj.spokes);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r * 100, 0);
      ctx.strokeStyle = obj.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  ctx.restore();
}

function updatePhysics() {
  const omega0 = parseFloat(omega0Input.value);
  const alpha = parseFloat(alphaInput.value);
  const r = parseFloat(radiusInput.value);

  const omega_t = omega0 + alpha * t;
  const theta = omega0 * t + 0.5 * alpha * t * t;
  const n = theta / (2 * Math.PI);
  const v = omega_t * r;

  return { omega_t, theta, n, v };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const config = objekSelect.value;
  const r = parseFloat(radiusInput.value);
  const { omega_t, theta, n, v } = updatePhysics();

  // Gambar objek
  drawObject(theta, config, r);

  // Update info
  waktuSpan.textContent = t.toFixed(2);
  omegaSpan.textContent = omega_t.toFixed(2);
  thetaSpan.textContent = theta.toFixed(2);
  putaranSpan.textContent = n.toFixed(2);
  vSpan.textContent = v.toFixed(2);

  t += 1/60; // 60 FPS

  if (isRunning) {
    animationId = requestAnimationFrame(animate);
  }
}

// Event Listeners
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    animate();
  }
});

stopBtn.addEventListener('click', () => {
  isRunning = false;
  cancelAnimationFrame(animationId);
});

resetBtn.addEventListener('click', () => {
  isRunning = false;
  cancelAnimationFrame(animationId);
  t = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ['waktu','omega','theta','putaran','v'].forEach(id => {
    document.getElementById(id).textContent = '0';
  });
});

// Auto redraw saat ubah objek
objekSelect.addEventListener('change', () => {
  if (!isRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const config = objekSelect.value;
    const r = parseFloat(radiusInput.value);
    drawObject(0, config, r);
  }
});