const body = document.querySelector("body");

let pimpEnabled = false;
function logKey(e) {
    if(e.code == "KeyQ" && !pimpEnabled){
        console.log(e.code);
        pimpEnabled = true;
        pimpMyRide();
    }
}

function pimpMyRide(){
    const car = document.querySelector(".car");
    const radio = document.createElement("section")
    radio.innerHTML = `
    <div class="radio">
        <audio class="radio__player" src="https://audiohub.com/testfile/hands-up-for-summer" controls preload> </audio>
    </div>`
    car.appendChild(radio);
    const style = document.createElement('style');
        style.innerHTML =
	    '.container {' +
        'background-color: #0a0004;'+
        'background-image: url("https://i.pinimg.com/originals/06/05/a0/0605a0bceeeb64719ad6dfce9dfc5b74.jpg");'+       
	    '}';


/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    document.head.appendChild(style);
    accelerator.addEventListener("click", () => {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/0600.mp3").play();
    });
    brakePedal.addEventListener("click", () => {
        new Audio("http://static1.grsites.com/archive/sounds/cars/cars016.mp3").play();
    });
    
    body.addEventListener("warnEvent", () => {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/0758.mp3").play();
    });
}