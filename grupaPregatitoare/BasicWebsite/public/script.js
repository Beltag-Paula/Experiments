const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%あいうえおかきくけこ";
const fontSize = 16;
let columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);
  const activeColor = getComputedStyle(document.body)
    .getPropertyValue("--primary-color")
    .trim();
  ctx.fillStyle = activeColor;
  ctx.font = fontSize + "px monospace";
  ctx.shadowBlur = 5;
  ctx.shadowColor = activeColor;

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

function typeWriter(elementId, text, speed = 100) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// --- UPDATED LOGIN HANDLER WITH FETCH ---
async function handleLogin() {
  const form = document.getElementById("loginForm");
  const user = document.getElementById("login-username").value;
  const psw = document.getElementById("login-psw").value;
  const errorMsg = document.getElementById("login-error");

  if (!user || !psw) {
    showTerminalError(form, errorMsg, "CRITICAL: FIELDS REQUIRED");
    return;
  }

  try {
    const response = await fetch("/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: psw }),
    });

    const data = await response.json();

    if (response.ok) {
      // --- CRITICAL FIX: YOU MUST SAVE BOTH ---
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // <--- ADD THIS LINE!

      if (data.role === "mastermind") {
        window.location.href = "mastermind.html";
      } else {
        window.location.href = "normie.html";
      }
    } else {
      showTerminalError(form, errorMsg, data.message || "ACCESS DENIED");
    }
  } catch (err) {
    showTerminalError(form, errorMsg, "SYSTEM_OFFLINE");
  }
}

// --- UPDATED SIGNUP HANDLER WITH FETCH ---
async function handleSignUp() {
  const form = document.getElementById("signupForm");
  const user = document.getElementById("signup-username").value;
  const psw = document.getElementById("signup-psw").value;
  const errorMsg = document.getElementById("signup-error");

  if (!user || !psw) {
    showTerminalError(form, errorMsg, "ERROR: NULL_INPUT_DETECTED");
    return;
  }

  try {
    const response = await fetch("/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: psw }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("NEW_IDENTITY_STORED. PROCEED TO LOGIN.");
      toggleForms();
    } else {
      showTerminalError(form, errorMsg, data.message || "DATA_COLLISION");
    }
  } catch (err) {
    showTerminalError(form, errorMsg, "UPLINK_FAILURE");
  }
}

function showTerminalError(form, msgElement, text) {
  msgElement.innerText = text;
  msgElement.style.display = "block";
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 400);
}

function toggleForms() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("signupForm").classList.toggle("hidden");
  document
    .querySelectorAll(".error-text")
    .forEach((el) => (el.style.display = "none"));
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("blue-theme");
});

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / fontSize);
  drops.length = columns;
  drops.fill(1);
});

setInterval(drawMatrix, 35);
window.onload = () => typeWriter("login-header", "[SYSTEM_LOGIN]", 150);
