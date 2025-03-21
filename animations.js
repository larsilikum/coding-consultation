//formatierungen für Eti-Wall-Ticker
const paragraph1 = document.getElementById('eftiwall');
paragraph1.innerHTML = [...paragraph1.textContent]
  .map(letter => `<p class="ascii" data-font="Efti Wall">${letter}</p>`)
  .join('');

const paragraph2 = document.getElementById('eftiwall2');
paragraph2.innerHTML = [...paragraph2.textContent]
  .map(letter => `<p class="ascii" data-font="Efti Wall">${letter}</p>`)
  .join('');

const paragraph3 = document.getElementById('eftiwall3');
paragraph3.innerHTML = [...paragraph3.textContent]
  .map(letter => `<p class="ascii" data-font="Efti Wall">${letter}</p>`)
  .join('');

// für titel
const title = document.getElementById('title');
title.innerHTML = [...title.textContent]
  .map(letter => `<h1 class="ascii" data-font="Crazy">${letter}</h1>`)
  .join('');

// Warte auf das Laden der Seite und starte Animation
if(!isPrint) {
  console.log('normal webview')
  window.addEventListener('load', function() {
    console.log('loaded')
    const titleText = title.textContent.trim();
    const titleWidth = title.offsetWidth;
    const animationDuration = (titleWidth / 130) + 's';  // Dauer der Animation
  
    title.style.animationDuration = `${animationDuration}`;
    title.classList.add('ticker');
  
    // style die Elemente erst nach dem Laden
    paragraph1.style.display = "flex";
    paragraph2.style.display = "flex";
    paragraph3.style.display = "flex";
    title.style.display = "flex";
    document.getElementById('print-title').style.display = "none";  });
}

function scrollTitle() {
  document.title = titleText.substring(position) + titleText.substring(0, position);
  position = (position + 1) % titleText.length;
  setTimeout(scrollTitle, 100); 
}

if(!isPrint) scrollTitle();
