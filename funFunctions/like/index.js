
import './style.css'
export function makeLikeable(element){
  element.addEventListener("click", (event) => {
    drawHeart(event.target)
  });
  element.addEventListener("touchstart", (event) => {
    drawHeart(event.target)
  });
  element.style.cursor = 'pointer'

}
function drawHeart(element){
  const a = document.createElement('span')
  const {x,width} = element.getBoundingClientRect()
  a.innerHTML = '&#10084;'
  const initX = x + Math.random()*width
  a.style.left = `${initX}px`
  a.classList.add('heart')
  element.parentElement.appendChild(a)
  setTimeout(()=>{
    element.parentElement.removeChild(a)
  }, 1000)

}