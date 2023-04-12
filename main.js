import './style.css'
import {infiniteInvert} from "./funFunctions/invert/index.js";
import {makeRainbow} from "./funFunctions/rainbow/index.js";

function makeFun(config) {
    const {
        portrait,
        background,
    } = config

    const portraitEl = document.querySelector(portrait)
    const backgroundEl = document.querySelector(background)

    infiniteInvert(
        makeCallbacks({
            targetEl: portraitEl,
            eventStart: 'mouseover',
            eventStop: 'mouseleave',
        })
    )

    makeRainbow(
        makeCallbacks({
            targetEl: portraitEl,
            eventStart: 'mouseover',
            eventStop: 'mouseleave',
            callbackEl: backgroundEl,
        })
    )
}

function makeCallbacks(options) {
    const {
        targetEl,
        eventStart,
        eventStop,
        callbackEl = targetEl,
    } = options

    return {
        activateCallback: cb => targetEl.addEventListener(eventStart, () => cb(callbackEl)),
        deactivateCallback: cb => targetEl.addEventListener(eventStop, () => cb(callbackEl)),
    }
}

window.makeFun = makeFun