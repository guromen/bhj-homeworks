function initRotator(rotator) {
  const cases = Array.from(rotator.querySelectorAll(".rotator__case"))
  let i = 0
  
  function rotate() {
    cases[i].classList.remove("rotator__case_active")
    i = (i + 1) % cases.length;
    cases[i].classList.add("rotator__case_active")
  }
  
  setInterval(rotate, 1000)
}
  
const rotators = document.querySelectorAll(".rotator")
rotators.forEach(initRotator)  