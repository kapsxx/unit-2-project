let mydot1 = document.querySelector("#dot1");
mydot1.addEventListener("click", handledot);

let mydot2 = document.querySelector("#dot2");
mydot2.addEventListener("click", handledot);

let mydot3 = document.querySelector("#dot3");
mydot3.addEventListener("click", handledot);

function handledot(event){
    // console.log(event.target.id);
    let val = event.target.id;

    if(val=="dot1"){
        // console.log(event.target);
        document.querySelector("#dot2").style.backgroundColor = "white";
        document.querySelector("#dot3").style.backgroundColor = "white";
        event.target.style.backgroundColor = "black";
    }else if(val=="dot2"){
        // console.log(event.target);
        document.querySelector("#dot1").style.backgroundColor = "white";
        document.querySelector("#dot3").style.backgroundColor = "white";
        event.target.style.backgroundColor = "black";
    }else if(val=="dot3"){
        // console.log(event.target);
        document.querySelector("#dot1").style.backgroundColor = "white";
        document.querySelector("#dot2").style.backgroundColor = "white";
        event.target.style.backgroundColor = "black";
    }
}

function handlehover(event){
    // console.log("hello");
    event.target.style.color = "blue";
}

function handleout(event){
    // console.log("bye");
    event.target.style.color = "black";
}

function handlecolor(event){
    console.log("hello");
    console.log(event.target);
    event.target.style.filter = "brightness(1)";
    event.target.style.filter = "invert(0)";
}

function handleinvert(event){
    console.log("bye");
    event.target.style.filter = "brightness(0)"
    event.target.style.filter = "invert(0.7)"
}