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
  let count
  getFromServer().then(x => setCount(x))

  function setCount(newCount){
    count = newCount
    el.innerHTML = `${count} отметки "Нравится"`
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
  console.log('send')
}