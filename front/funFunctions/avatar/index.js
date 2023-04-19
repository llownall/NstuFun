import './style.css'
export function placeBorder(portraitEl){
  // console.log(portraitEl.getBoundingClientRect())

  const border = document.createElement('img')
  const rate = 1.223
  
  border.src = new URL('../../assets/13.png', import.meta.url).href
  border.style.width = 'unset'
  border.style.position = 'absolute'
  onResize()

  window.addEventListener('resize', onResize)
  function onResize() {
    const {width, height} = portraitEl.getBoundingClientRect()
    border.width = width * rate
    border.height = height * rate
    border.style.top = `-${height * (rate-1)/2}px`
    border.style.left = `-${-10 + width * (rate-1)/2}px`
  }

  portraitEl.parentElement.appendChild(border)
}