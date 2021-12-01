const file = document.querySelector('#uploadFile-btn')
const chosenImage = document.querySelector('.chosenImage')
const uploadButtonWrapper = document.getElementById('uploadButtonWrapper')
const containerResizable = document.getElementById('container__resizable');
const deletePicture = document.querySelector('.fa-trash')


file.addEventListener('change', uploadImage)
containerResizable.addEventListener('mousemove', handleResize)
containerResizable.addEventListener('touchmove', handleResize)
deletePicture.addEventListener('click', deleteImage)


function uploadImage(){
    let picture = this.files[0]

    if(picture){
        let reader = new FileReader();

        reader.addEventListener('load', ()=>{
            chosenImage.setAttribute('src', reader.result)
        })
        reader.readAsDataURL(picture)
    }
}


function handleResize(){
    document.getElementById('width').innerHTML = `${containerResizable.clientWidth} px`;
    document.getElementById('height').innerHTML = `${containerResizable.clientHeight} px`;
}

handleResize()


function deleteImage(){
    chosenImage.removeAttribute('src', picture)
}