const file = document.querySelector('#uploadFile-btn')
const containerResizable = document.querySelector('.container__resizable')

{/* <img src=" " alt=""> */}
function uploadImage(){
    let picture = this.files[0]

    if(picture){
        let reader = new FileReader();

        reader.addEventListener('load', ()=>{
            containerResizable.setAttribute('img', reader.result)
        })
    }
}