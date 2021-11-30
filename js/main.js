const file = document.querySelector('#uploadFile-btn')
const chosenImage = document.querySelector('.chosenImage')

file.addEventListener('change', uploadImage)

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