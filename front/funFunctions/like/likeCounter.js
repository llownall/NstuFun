export function createCounter(element) {

  const {el, increaseCount} = counterElement()
  element.appendChild(el)

  return {
    el,
    increaseCount
  }
}

function counterElement() {

  const el = document.createElement('div')
  el.style.marginTop = '8px'
  let count
  getFromServer().then(x => setCount(x))

  function setCount(newCount){
    count = newCount
    const last_digit = count % 10
    let ending
    if ([1].includes(last_digit)) {ending = 'отметка'}
    else if ([2,3,4].includes(last_digit)) {ending = 'отметки'}
    else {ending = 'отметок'}

    el.innerHTML = `${count} ${ending} "Нравится"`
  }

  function increaseCount() {
    setCount(count + 1)
    increaseOnServer()
  }

  return {
    el,
    increaseCount
  }
}

async function getFromServer() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`)
  const text = await response.text()
  return parseInt(text)
}

function increaseOnServer(){
  fetch(`${import.meta.env.VITE_BACKEND_URL}/increase`)
}