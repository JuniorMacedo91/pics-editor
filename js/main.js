const containerResizable = document.querySelector('.container__resizable')
const getWidth = document.querySelector('#width')
const getHeight = document.querySelector('#height')

function getSize(){
  

    getWidth.innerHTML = window.innerWidth
    getHeight.innerHTML = window.innerHeight

}

window.addEventListener('resize', getSize)