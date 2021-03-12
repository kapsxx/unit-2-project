let clk = document.querySelector("#clickme");
clk.addEventListener("click", handlehomepage);

function handlehomepage(event){
    location.assign("index.html");
}

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

        document.querySelector("#para1").textContent = "DOCTOR'S NOTES";
        document.querySelector("#heading1").textContent = "Rodan + Fields Multi-Med Therapy Approach";
        document.querySelector("#para2").textContent = "Our Founders discuss the magic behind what makes R+F skin care work.";
        document.querySelector("#image1").setAttribute("src", "https://www.rodanandfields.com/blog/wp-content/uploads/2020/08/06_Rodan_Fields_3333_V7_1100x1100-1024x1024.jpg");

    }else if(val=="dot2"){
        // console.log(event.target);
        document.querySelector("#dot1").style.backgroundColor = "white";
        document.querySelector("#dot3").style.backgroundColor = "white";
        event.target.style.backgroundColor = "black";

        document.querySelector("#para1").textContent = "PRO TIPS";
        document.querySelector("#heading1").textContent = "With The Right Lash Care, You Won’t Miss Your Extensions";
        document.querySelector("#para2").textContent = "Pro-approved tips on how to get lashes so long you won’t believe your eyes.";
        document.querySelector("#image1").setAttribute("src", "https://www.rodanandfields.com/blog/wp-content/uploads/2020/08/280119_ROD_08_035_FINAL_1100X1100-1024x1024.jpg");

    }else if(val=="dot3"){
        // console.log(event.target);
        document.querySelector("#dot1").style.backgroundColor = "white";
        document.querySelector("#dot2").style.backgroundColor = "white";
        event.target.style.backgroundColor = "black";

        document.querySelector("#para1").textContent = "SCIENCE OF SKINCARE";
        document.querySelector("#heading1").textContent = "Why Dermatologists Recommend Niacinamide Skincare";
        document.querySelector("#para2").textContent = "From regulating digestion to improving skin, Vitamin B3/Niacinamide is a must.  ";
        document.querySelector("#image1").setAttribute("src", "https://www.rodanandfields.com/blog/wp-content/uploads/2020/10/Niacinamide-Image.jpg");

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

let search_btn = document.querySelector("button");
search_btn.addEventListener("click", handlesearch);

function handlesearch(event){
    let val = document.querySelector("input").value;
    if(val!=""){
        location.assign(`https://www.rodanandfields.com/blog/index.php?s=${val}`);
        document.querySelector("input").value = "";
    }
}

let btnmy = document.querySelector(".mybtn");
btnmy.addEventListener("click", handlebtnmy);

function handlebtnmy(event){
    let inputmy = document.querySelector(".myinput").value;
    console.log(inputmy);
    if(inputmy!=""){
        location.assign(`https://www.rodanandfields.com/blog/index.php?s=${inputmy}`);
        document.querySelector(".myinput").value = "";
    }
}
