import './style.css'
import {makeLikeable} from "./funFunctions/like/index.js";

function makeFun(config) {
  const {
    portrait,
  } = config

  const portraitEl = document.querySelector(portrait)

  makeLikeable(portraitEl)
}

window.makeFun = makeFun