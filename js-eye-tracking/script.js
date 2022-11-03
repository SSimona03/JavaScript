window.saveDataAcrossSeassions = true; //save 

const LEFT_CUTOFF = window.innerWidth / 4;
const RIGHT_CUTOFF = window.innerWidth -  window.innerWidth / 4;
const LOOK_DELAY = 1000; // 1 sec

let imageElement = getNewImage();
let nextImageElement = getNewImage(true);
let startLookTime = Number.POSITIVE_INFINITY;
let lookDirection = null;

webgazer
.setGazeListener((data, timestamp) => {
    if (data == null || lookDirection === "STOP") return

    if(data.x < LEFT_CUTOFF && lookDirection !== "LEFT" && lookDirection !== "RESET"){ 
        //Reset if is reset then we are force to look in the center
        startLookTime = timestamp;
        lookDirection = "LEFT";

    }else if (data.x > RIGHT_CUTOFF && lookDirection !== "RIGHT" && lookDirection !== "RESET"){
        startLookTime = timestamp;
        lookDirection = "RIGHT";

    }else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF ){
        startLookTime = Number.POSITIVE_INFINITY;
        lookDirection = null;
    }

    if(startLookTime + LOOK_DELAY < timestamp){
        if(lookDirection === "LEFT"){
            imageElement.classList.add('left');

        }else {
            imageElement.classList.add('right');
        }

        startLookTime = Number.POSITIVE_INFINITY;
        lookDirection = "STOP";
    setTimeout(() => {
        imageElement.remove() // remove old image
        nextImageElement.classList.remove("next")
        imageElement = nextImageElement;
        nextImageElement = getNewImage(true);
        lookDirection = 'RESET';
    }, 200)
       
    }

}).begin();

webgazer.showVideoPreview(false)//.showPredinctionPoints(false);


function getNewImage(next = false) {
    let img = document.createElement("img")
    img.src = "https://picsum.photos/1000?" + Math.random();

    if(next) {
        img.classList.add("next")}
    
    document.body.append(img);

    return img;
} 

