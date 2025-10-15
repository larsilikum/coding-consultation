function setSunset() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const dayY = -350;
  const nightY = 0;

  let currentMode;

  const fractionalHour = hour + minute / 60;

  if (fractionalHour <= 12) {
    currentMode = nightY + (dayY - nightY) * (fractionalHour / 12);
  } else {
    currentMode = dayY - (dayY - nightY) * ((fractionalHour - 12) / 12);
  }

  const sky = document.getElementById("sky");
  if (sky) sky.style.transform = `translateY(${currentMode}vh)`;
}

setSunset();

// Update every minute
setInterval(setSunset, 60 * 1000);
