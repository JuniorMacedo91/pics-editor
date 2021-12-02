const sharp = require('sharp')
const fs = require('fs')

let path = process.argv[2];
let width = Number(process.argv[3])
let height = Number(process.argv[4]);


function resize(path,width, height){
    sharp(path).resize({width: width, height: height})
            .toFile('./resized/newImage.jpg', erro =>{
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


