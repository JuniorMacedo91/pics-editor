const file = document.querySelector('#uploadFile-btn')
const chosenImage = document.querySelector('.chosenImage')
const uploadButtonWrapper = document.getElementById('uploadButtonWrapper')
const containerResizable = document.getElementById('container__resizable');

file.addEventListener('change', uploadImage)
containerResizable.addEventListener('mousemove', handleResize)


function uploadImage(){
    let picture = this.files[0]

    if(picture){
        let reader = new FileReader();

        reader.addEventListener('load', ()=>{
            chosenImage.setAttribute('src', reader.result)
            uploadButtonWrapper.style.display='none';
        })
        reader.readAsDataURL(picture)
    }
}



function handleResize(){
    document.getElementById('width').innerHTML = `${containerResizable.clientWidth} px`;
    document.getElementById('height').innerHTML = `${containerResizable.clientHeight} px`;
}

handleResize()

