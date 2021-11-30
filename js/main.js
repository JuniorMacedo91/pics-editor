const containerResizable = document.querySelector('.container__resizable')
const getWidth = document.querySelector('#width')
const getHeight = document.querySelector('#height')

function getSize(){
    getWidth.innerHTML = `${containerResizable.clientWidth} px`
    getHeight.innerHTML = `${containerResizable.clientHeight} px`
}

