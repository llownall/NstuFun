import './style.css'

const CLASS_NAME = 'infinite_invert'

function activate(element) {
    element.classList.add(CLASS_NAME)
}

function deactivate(element) {
    element.classList.remove(CLASS_NAME)
}

export function infiniteInvert({activateCallback, deactivateCallback}) {
    activateCallback(activate)
    deactivateCallback(deactivate)
}