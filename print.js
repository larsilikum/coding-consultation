// check if we want to print and how many characters per line
const urlParams = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
})
const isPrint = urlParams.print_chars !== null
const charLength = urlParams.print_chars
const date = urlParams.date
// the global font aspect ratio (0.48 for WhoIsMono)
const fontAspectRatio = 0.48

// WARNING THIS COULD BE A LOT CLEANER, BUT I WAS LAZY
if (isPrint) {
  // show only print elements
  const onlyPrintElements = document.querySelectorAll('.only-print')
  for (const el of onlyPrintElements) {
    el.style.display = 'block'
  }
  // remove flex-box layout
  const qrCodeMapFlex = document.querySelector('#map-qr-code-container')
  qrCodeMapFlex.style.display = 'block'
  // qr code container width
  const qrCodeContainer = document.querySelector('#qr-code-container')
  qrCodeContainer.style.width = `calc(${charLength} * ${fontAspectRatio}rem)`
  // qr code font size
  const qrCode = document.querySelector('#qr-code')
  qrCode.style.fontSize = 'inherit'

  const title = document.querySelector('#title')
  title.style.display = 'none'

  const printTitle = document.querySelector('#print-title')
  printTitle.style.display = 'block'

  const subheadline = document.querySelector('#subheadline')
  subheadline.style.textAlign = 'left'

  if(date) {
    const dateEl = document.querySelector('#date')
    dateEl.innerText = date
  }

  const sidebar = document.querySelector('#sidebar')
  sidebar.style.display = 'none'
}