const sharp = require('sharp')
const fs = require('fs')


let path =  `./temporary/me.jpg`
let width = 288;
let height = 203;

function resize(path,width, height){
    sharp(path).resize({width: width, height: height}).jpeg()
            .toFile('./resized/new-image.jpeg', erro =>{
                if(erro){
                    console.log(erro)
                } else{
                    fs.unlink(path, erro =>{
                        if(erro){
                            throw erro
                        }
                    })
                }
        })
}

resize(path,width, height)

