if (window.location.protocol === "file:") {
  alert("fetch APi does not support file: protocol.");
}

figlet.defaults({
  fontPath: "assets/fonts",
})

figlet.preloadFonts([], function () {
})

// update function to fill elements with ascii font in correct width
const update = () => {
  for (const el of asciiElements) {
    figlet.text(
      el.dataset.originalText,
      {
        // fallback to standard font if no font is defined
        font: el.dataset.font ? el.dataset.font : "Standard",
        horizontalLayout: el.dataset.horizontalLayout ? el.dataset.horizontalLayout : "default",
        verticalLayout: "full",
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
        el.innerHTML =
          text
      }
    )
  }
}

const calculateCharacterAmountWidth = el => {
  const width = el.getBoundingClientRect().width
  const fontSize = parseInt(window.getComputedStyle(el).fontSize)
  return Math.floor(width / (fontSize * 0.48))
}

const asciiElements = document.querySelectorAll('.ascii')

for(const el of asciiElements) {
  console.log(el.dataset)
  el.dataset.originalText = el.innerText
}

update() // init

window.onresize = update