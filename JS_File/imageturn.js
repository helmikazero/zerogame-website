let imagebanner = document.querySelector("#rotatingImage");

let rotateno = 0;

const images = [
    "Image/zeroFront.png",
    "Image/zeroFront.png",
    "Image/igss/zero0.png",
    "Image/igss/zero1.png",
    "Image/igss/zero2.png",
    "Image/igss/zero3.png",
    "Image/igss/zero4.png",
    "Image/igss/zero5.png",
    
];

function rotateImage(){
    if(rotateno < images.length-1){
        rotateno++;
    }else{
        rotateno = 0;
    }
    imagebanner.setAttribute("src",images[rotateno]);
}

setInterval(rotateImage,1000);