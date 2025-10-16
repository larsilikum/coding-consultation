function setSunset() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const dayY = -450;
  const nightY = 0;

  const fractionalHour = hour + minute / 60;
  let currentMode = 0;
  let textShadow = "none";

  if (fractionalHour <= 12) {
    currentMode = nightY + (dayY - nightY) * (fractionalHour / 12);
    if (hour < 5) {
      textShadow = "1px 1px 10px white";
    }
  } else {
    currentMode = dayY - (dayY - nightY) * ((fractionalHour - 12) / 12);
    if (hour >= 18) {
      textShadow = "1px 1px 10px white";
    }
  }

  document.body.style.textShadow = textShadow;

  const sky = document.getElementById("sky");
  if (sky) sky.style.transform = `translateY(${currentMode}vh)`;
}
setInterval(setSunset, 60 * 1000);

setSunset();

function createStars(count = 300) {
  const sky = document.getElementById("sky");
  if (!sky) return;

  // clear old stars if any
  sky.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const chars = ["+", "*", "."];
    star.textContent = chars[Math.floor(Math.random() * chars.length)];

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;

    star.style.fontSize = `${10 + Math.random() * 10}px`;

    sky.appendChild(star);
  }
}

function animateStars() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    // Twinkle effect
    const twinkle = Math.random() * 0.5 + 0.5;
    star.style.opacity = twinkle;
    // Slight random position drift
    const driftX = (Math.random() - 0.5) * 1;
    const driftY = (Math.random() - 0.5) * 1;
    star.style.transform = `translate(${driftX}px, ${driftY}px)`;
  });
}

// Initialize
createStars(150);
setInterval(animateStars, 800);
