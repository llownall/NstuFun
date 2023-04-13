
import './style.css'
export function makeLikeable(element){
  element.addEventListener("click", (event) => {
    drawHeart(event.target)
  });
  element.style.cursor = 'pointer'

}
function drawHeart(element){
  const a = document.createElement('span')
  a.innerHTML = '&#10084;'
  a.style.left = Math.random() * 100 +'%'
  a.classList.add('heart')
  element.parentElement.append(a)
  setTimeout(()=>{
    element.parentElement.removeChild(a)
  }, 1000)

}