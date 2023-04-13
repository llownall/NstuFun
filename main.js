import './style.css'
import {makeLikeable} from "./funFunctions/like/index.js";

function makeFun(config) {
  const {
    portrait,
  } = config

  const portraitEl = document.querySelector(portrait)

  let i
  var x = document.body.getElementsByTagName("*")
  for (i = 0; i < x.length; i++) {
    var y = (Math.random() - 0.5)
    x[i].style.transform = "rotate(" + y + "deg)"
  }

  makeLikeable(portraitEl)
}

window.makeFun = makeFun