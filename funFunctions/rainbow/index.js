import './style.css'

const CLASS_NAME = 'rainbow'

function activate(element) {
    element.classList.add(CLASS_NAME)
}

function deactivate(element) {
    element.classList.remove(CLASS_NAME)
}

export function makeRainbow({activateCallback, deactivateCallback}) {
    activateCallback(activate)
    deactivateCallback(deactivate)
}