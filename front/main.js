import {makeLikeable} from "./funFunctions/like/index.js";
import {createCounter} from "./funFunctions/like/likeCounter.js";

function makeFun(config) {
    const {
        portrait,
    } = config

    const portraitEl = document.querySelector(portrait)

    const {increaseCount} = createCounter(portraitEl.parentElement)

    makeLikeable(portraitEl, increaseCount)
}

window.makeFun = makeFun