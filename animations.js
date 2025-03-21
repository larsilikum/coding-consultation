//formatierungen für Eti-Wall-Ticker
const divider = document.querySelectorAll('.eftiwall')
for (const dividerElement of divider) {
  // for normal webview
  if (!isPrint) {
    dividerElement.innerHTML = [...dividerElement.textContent]
      .map(letter => `<p class="ascii" data-font="Efti Wall">${letter}</p>`)
      .join('')
  } 
  // for print view
  else {
    dividerElement.classList.add('ascii')
    dividerElement.dataset.font = 'Efti Wall'
    dividerElement.dataset.sliceLines = 4
  }
}

// für titel
const title = document.getElementById('title');
title.innerHTML = [...title.textContent]
  .map(letter => `<h1 class="ascii" data-font="Crazy">${letter}</h1>`)
  .join('');

// Warte auf das Laden der Seite und starte Animation
if(!isPrint) {
  window.addEventListener('load', function() {
    const titleText = title.textContent.trim();
    const titleWidth = title.offsetWidth;
    const animationDuration = (titleWidth / 130) + 's';  // Dauer der Animation
  
    title.style.animationDuration = `${animationDuration}`;
    title.classList.add('ticker');
  
    // style die Elemente erst nach dem Laden
    divider.forEach(el => el.style.display = "flex")
    title.style.display = "flex";
    document.getElementById('print-title').style.display = "none";  });
}

function scrollTitle() {
  document.title = titleText.substring(position) + titleText.substring(0, position);
  position = (position + 1) % titleText.length;
  setTimeout(scrollTitle, 100); 
}

if(!isPrint) scrollTitle();
