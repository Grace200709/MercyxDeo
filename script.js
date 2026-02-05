let current = 1;
let music = document.getElementById('music');
let playing = false;
let taps = 0;

function nextPage(n) {
  document.getElementById('page' + n).classList.remove('active');
  document.getElementById('page' + (n + 1)).classList.add('active');
  current++;

  if (n === 1 && !playing) {
    music.play();
    playing = true;
    document.querySelector('.music-btn').textContent = '⏸️';
  }

  typeAll();
}

function toggleMusic() {
  if (playing) {
    music.pause();
    playing = false;
    document.querySelector('.music-btn').textContent = '▶️';
  } else {
    music.play();
    playing = true;
    document.querySelector('.music-btn').textContent = '⏸️';
  }
}

/* Typing Effect */
function typeText(el) {
  let text = el.getAttribute('data-text');
  let i = 0;
  el.textContent = '';

  let interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function typeAll() {
  document.querySelectorAll('.active .type').forEach(el => {
    typeText(el);
  });
}

/* Hearts */
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

/* Floating Text */
const messages = ['I Love You ❤️', 'Forever 💍', 'Mercy 💖', 'Deopzy ❤️ Mercy', 'My Queen 👑'];

function createText() {
  const text = document.createElement('div');
  text.className = 'float-text';
  text.textContent = messages[Math.floor(Math.random() * messages.length)];
  text.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(text);

  setTimeout(() => text.remove(), 9000);
}

/* Confetti */
function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = ['#fff','#ffd1e8','#ff5fa2'][Math.floor(Math.random()*3)];
    c.style.animationDelay = Math.random() + 's';
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}

/* Secret Button */
document.getElementById('secretBtn').addEventListener('click', () => {
  taps++;
  if (taps === 3) {
    alert('You are my best gift 🎁❤️');
    nextPage(4);
  }
});

/* Celebrate */
function celebrate() {
  createConfetti();
  for (let i = 0; i < 50; i++) createHeart();
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


setInterval(createHeart, 700);
setInterval(createText, 2000);

typeAll();
