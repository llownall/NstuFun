import classes from './style.module.css'

export function makeLikeable(element) {
    element.addEventListener('click', (event) => {
        drawHeart(event.target)
    });
    element.style.cursor = 'pointer'
}

function drawHeart(element) {
    const {width} = element.getBoundingClientRect()
    const heart = createHeart(width)

    element.parentElement.appendChild(heart)
    setTimeout(() => {
        element.parentElement.removeChild(heart)
    }, 1000)
}

function createHeart(positionRange) {
    const heart = document.createElement('div')
    heart.innerHTML = '&#10084;'
    heart.className = classes.heart

    const initX = Math.random() * positionRange
    heart.style.left = `${initX}px`

    return heart
}