if (window.location.protocol === "file:") {
  alert("fetch APi does not support file: protocol.");
}

figlet.defaults({
  fontPath: "assets/fonts",
})

figlet.preloadFonts([], function () {
})

// the global font aspect ratio (0.48 for WhoIsMono)
const fontAspectRatio = 0.48

// update function to fill elements with ascii font in correct width
const update = () => {
  for (const el of asciiElements) {
    figlet.text(
      el.dataset.originalText,
      {
        // fallback to standard font if no font is defined
        font: el.dataset.font ? el.dataset.font : "Standard",
        horizontalLayout: el.dataset.horizontalLayout ? el.dataset.horizontalLayout : "default",
        verticalLayout: el.dataset.verticalLayout ? el.dataset.verticalLayout : "full",
        width: calculateCharacterAmountWidth(el),
        // attempt to break on whitespace
        whitespaceBreak: true,
      },
      function (err, text) {
        if (err) {
          console.log("something went wrong...")
          console.dir(err)
          return;
        }
        el.innerHTML = text
        if(el.dataset.sliceLines) {
          const arr = text.split('\n')
          if(arr.length > el.dataset.sliceLines) {
            el.innerHTML = arr.slice(0, el.dataset.sliceLines).join('\n')
          }
        }
      }
    )
  }
  for(const img of imageElements) {
    if(img.dataset.aspectRatio) renderImage(img)
  }
}
// calculate how many characters fit in the element per line
const calculateCharacterAmountWidth = el => {
  const width = el.getBoundingClientRect().width
  const fontSize = parseInt(window.getComputedStyle(el).fontSize)
  return Math.floor(width / (fontSize * fontAspectRatio))
}
// converts the image to ascii and renders ascii in the .ascii-image element
const renderImage = img => {
  const width = calculateCharacterAmountWidth(img)
  const fontSize = parseInt(window.getComputedStyle(document.body).fontSize)
  aalib.read.image.fromURL(img.dataset.src)
    // .map(aalib.filter.contrast(0.9))
    .map(aalib.aa({ width: width, height: Math.floor((width / img.dataset.aspectRatio) * fontAspectRatio) }))
    .map(aalib.filter.brightness(10))
    .map(aalib.render.html({ el: img, fontFamily: 'WhoIsMono', fontSize: fontSize }))
    .subscribe()
}
// calculate Image Aspect Ratio; returns Promise
function getImageAspectRatio(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = function() {
      const aspectRatio = this.width / this.height;
      resolve(aspectRatio);
    };
    
    img.onerror = function() {
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
}

const asciiElements = document.querySelectorAll('.ascii')
const imageElements = document.querySelectorAll('.ascii-image')

for(const el of asciiElements) {
  el.dataset.originalText = el.innerText
}

for(const img of imageElements) {
  getImageAspectRatio(img.dataset.src)
    .then(aspectRatio => {
      img.dataset.aspectRatio = aspectRatio
      renderImage(img)
    })
    .catch(error => console.error(error))
}
update() // init

window.onresize = update