//sonnenuntergang
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
      document.getElementById("ghost").style.animation = "ghostandufo 5s ease";

      setTimeout(() => {
        document.getElementById("ghost").style.animation = "";
      }, 5 * 1000);
    }
  } else {
    currentMode = dayY - (dayY - nightY) * ((fractionalHour - 12) / 12);
    if (hour >= 19) {
      textShadow = "1px 1px 10px white";

      document.getElementById("ufo").style.animation = "ghostandufo 5s ease";

      setTimeout(() => {
        document.getElementById("ufo").style.animation = "";
      }, 5 * 1000);
    }
  }

  document.body.style.textShadow = textShadow;

  const sky = document.getElementById("sky");
  if (sky) sky.style.transform = `translateY(${currentMode}vh)`;

  return hour;
}
setInterval(setSunset, 30 * 1000);
setSunset();

//sterne
const sky = document.getElementById("sky");
function createStars(count) {
  if (sky.childElementCount !== count) {
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
}

function animateStars() {
  const stars = sky ? sky.querySelectorAll(".star") : [];
  stars.forEach((star) => {
    const twinkleSpeed = 0.02 + Math.random() * 0.03;
    let twinklePhase = parseFloat(
      star.dataset.twinklePhase || Math.random() * Math.PI * 2
    );
    twinklePhase += twinkleSpeed;
    star.dataset.twinklePhase = twinklePhase;
    const twinkle = 0.5 + 0.5 * Math.sin(twinklePhase);
    star.style.opacity = twinkle;

    const driftX = (Math.random() - 0.5) * 1.5;
    const driftY = (Math.random() - 0.5) * 1.5;
    star.style.transform = `translate(${driftX}px, ${driftY}px)`;
  });
  requestAnimationFrame(animateStars);
}

createStars(150);
animateStars();

//sternschnuppe
function sternschnuppe() {
  const hour = setSunset();

  if (hour <= 5 || hour >= 18) {
    const sternschnuppen = document.querySelectorAll(".sternschnuppe");
    sternschnuppen.forEach((sternschnuppe) => {
      function placeSternschnuppe() {
        const x = Math.random() * 80;
        const y = Math.random() * 50;
        sternschnuppe.style.left = `${x}%`;
        sternschnuppe.style.top = `${y}%`;
        sternschnuppe.style.opacity = 1;

        const text = sternschnuppe.textContent;
        sternschnuppe.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
          sternschnuppe.innerHTML += `<span>${text[i]}</span>`;
        }

        const letter = sternschnuppe.querySelectorAll("span");
        letter.forEach((span, i) => {
          setTimeout(() => {
            span.style.opacity = 1;
            setTimeout(() => {
              span.style.opacity = 0;
            }, 400);
          }, i * 20);
        });
      }

      setInterval(placeSternschnuppe, Math.random() * 15000);
    });
  }
}

sternschnuppe();
