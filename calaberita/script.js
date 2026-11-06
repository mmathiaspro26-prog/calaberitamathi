function changeColor() {
    document.body.style.backgroundColor = "Black";
}

function crearDulce() {


    // create new element

    let dulce = document.createElement("div");

    //class link for css syntax fix
    
    dulce.classList.add(".dulce");

    // randomize candy

    let dulces = ["iOS 26.4", "🍭", "🍫", "🍡", "🍬"];

    dulce.innerHTML = dulces[Math.floor(Math.random() * dulces.length)];


    // giv candy styles

    dulce.style.position = "fixed";

    dulce.style.top = "-50px";

    dulce.style.left = Math.random() * 100 + "vw";

    dulce.style.fontSize = (20 + Math.random() * 20) + "px";

    dulce.style.zIndex = "9999";

    dulce.style.pointerEvents = "none";


    // add candy into the page

    document.body.appendChild(dulce);


    // fall speed

    let duracion = 3 + Math.random() * 4;


    // we make it fall

    dulce.animate(

        [

            { transform: "translateY(0) rotate(0deg)" },

            { transform: "translateY(110vh) rotate(360deg)" }

        ],

        {

            duration: duracion * 1000,

            easing: "linear"

        }

    );

    // delete candy once its done

    setTimeout(function () {

        dulce.remove();

    }, duracion * 1000);

}


// make candy every 300 miliseconds

setInterval(crearDulce, 300);