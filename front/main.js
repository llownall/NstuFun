import {makeLikeable} from "./funFunctions/like/index.js";
import {createCounter} from "./funFunctions/like/likeCounter.js";
import {placeBorder} from "./funFunctions/avatar/index.js";

function makeFun(config) {

  const {
    portrait,
  } = config

  const portraitEl = document.querySelector(portrait)

  // portraitEl.src = new URL('./assets/2.png', import.meta.url).href
  
  placeBorder(portraitEl)
  
  window.onload = () => {
    const {increaseCount} = createCounter(portraitEl.parentElement)

    makeLikeable(portraitEl, increaseCount)
  }
}

window.makeFun = makeFun