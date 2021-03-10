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