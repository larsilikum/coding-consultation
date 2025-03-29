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

    title.classList.add('ticker');
  
    // style die Elemente erst nach dem Laden
    divider.forEach(el => el.style.display = "flex")
    title.style.display = "flex";
    document.getElementById('print-title').style.display = "none";  });
}

  // Animierte Titelleiste
  const titleText = "Coding Selbsthilfe Sprechstunden ";
  let position = 0;

  function scrollTitle() {
    document.title = titleText.substring(position) + titleText.substring(0, position);
    position = (position + 1) % titleText.length;
    setTimeout(scrollTitle, 100); 
  }

  scrollTitle();

  const map = document.querySelector('#ascii-map')
  const text = map.textContent
  const textArray = [...text]
  const indeces = textArray.map((char, index) => ({ char, index})).filter(c => c.char === '~' || c.char === '°')
  
  function animateMap() {
    const randomIndeces = indeces.filter(c => Math.random() * 50 < Math.random())

    const bubbles = textArray.map((char, index) => ({ char, index})).filter(c => c.char === 'o' && indeces.findIndex(char => char.index === c.index) >= 0)
    const expandedBubbles = textArray.map((char, index) => ({ char, index})).filter(c => c.char === ':')
    const poppedBubbles = textArray.map((char, index) => ({ char, index})).filter(c => c.char === '.')
    const droplets = textArray.map((char, index) => ({ char, index})).filter(c => c.char === '°')
    for (const c of randomIndeces) {
      textArray[c.index] = 'o'
    }
    for (const bubble of bubbles) {
      textArray[bubble.index] = ':'
    }
    for (const bubble of expandedBubbles) {
      textArray[bubble.index] = '.'
    }
    for (const pBubble of poppedBubbles) {
      textArray[pBubble.index] = '°'
    }
    for (const droplet of droplets) {
      textArray[droplet.index] = '~'
    }
    map.textContent = textArray.join('')
    setTimeout(animateMap, 150)
  }

  animateMap()

