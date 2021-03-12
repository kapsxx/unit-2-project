
var prev = document.getElementById("prev")
prev.addEventListener("click",scroll_left)

function scroll_left(event) {
   var content = document.getElementById("fade")
   content.scrollLeft -= 540;
   event.preventDefault();
  if(content.scrollLeft==540){
    prev.style.color = "silver"
  }
  else{
    prev.style.color = "grey"
  }
  }

var next = document.getElementById("next")
next.addEventListener("click",scroll_right)

function scroll_right(event) {
    var content = document.getElementById("fade")
    content.scrollLeft += 540;
    event.preventDefault();

    if(content.scrollLeft<=540){
        prev.style.color = "silver"
      }
      else{
        prev.style.color = "grey"
      }
}

  
  


function display(){
    var flag_menu = document.getElementsByClassName('flag-menu');
    var ul = document.querySelector('ul');
    if ( ul.style.display == 'none'){
    ul.style.display = 'block';
    }
    else {
        ul.style.display = 'none';
    }
   
}


function showresult(){
    
    var search_data = document.getElementById('item-search').value;
    console.log(search_data)
    let src = 'https://www.rodanandfields.com/search?';
    var params = `q=${search_data}`;
    var urlsearchparams = new URLSearchParams(`${src}${params}`);
    console.log(urlsearchparams);
    var getdata = urlsearchparams.get('q');
    
    location.assign(`${src}${params}`);
    window.onload = search_data.value = "";
}

var prev1 = document.getElementById("prev1")
prev1.addEventListener("click",scroll_left1)
var count =0;


var scrollbtn = document.getElementById('topscroll');
    var scrolltop = document.documentElement.clientHeight
function slideup() {
    
    window.scrollTo({
        top:0,
        left: 0,
        behavior:"smooth"
    });

   
  }

scrollbtn.addEventListener('click',slideup);


//for footer signup
var arr = [];
var flag =1;
 function show_msg(){
      
     
var signin_email = document.getElementById('signin-email').value;

console.log(signin_email)
localStorage.setItem("signin_email",signin_email);
localStorage.getItem('signin_email');
console.log(signin_email);
 if ( signin_email.length == 0 || signin_email.indexOf('@') == -1 || signin_email.indexOf('.com') == -1){
     alert('Invalid Email Address');
     flag =0;
 }
 
   
for ( var i = 0 ; i < signin_email.length; i++){
    if ( signin_email[i] == '@' || signin_email[i] == '.' || signin_email[i] == 'c' || signin_email[i] == 'o' || signin_email[i] == 'm'){
       arr.push(i)
    }
}
for ( var i  =1; i < arr.length-1; i++){
    var num = arr[0];
    if ( arr[i+1] > arr[i-1]){
       var t = true;
    } else {
     // alert('give the email in correct order i.e., alphabets-or-number@domainname.com');
    }
}
for ( var j = 0; j < signin_email.length; j++){
    if ( signin_email[j] == '@'){
        lenbefore = j;
        if ( lenbefore > 0){
            t =true;
        }else{
           // alert('give sometihng before @');
        }
    if ( signin_email[j] == '.'){
        lenbefore1 = j;
        if ( lenbefore1> lenbefore){
            t =  true;
        }else {
           // alert('give domain name before .');
        }
    }    
    } 
   
} if ( t= true){
    var signin_form = document.getElementById('signin-form');
    var policy = document.getElementById('policy');
    var s_form = document.getElementById('sform');
    var s_btn = document.getElementById('sbtn');
    var signin_mail = document.getElementById('signin-email');

   
     var p1 = document.createElement('p');
     if ( flag == 1){
        policy.style.display = "none";
        s_form.style.display = "none";
        s_btn.style.display = "none";
        signin_mail.style.display = "none";    
     p1.innerText = `You're on the list
                          Check your inbox for the latest on R+F products,
                          news, and special offers.`
    signin_form.appendChild(p1);
    p1.setAttribute('id', 'p1');
     }
}
 }

function scroll_left1(event) {
    var content = document.getElementById("cont8")
    var arrow2 = document.getElementById("arrow2")
    content.scrollLeft -= 1040;
    event.preventDefault();
  //  console.log(content.scrollLeft)
    count--;
    if(count<=0){
        count=0;
    }
    if(content.scrollLeft==0){
        prev1.style.border = "none"
        arrow.style.visibility ='hidden';
        arrow2.style.visibility="visible";
        next1.style.border="none";
    }
    else{
        prev1.style.border = "thin dotted black"
        arrow.style.visibility = 'visible';
        arrow2.style.visibility="visible"
    }
   }

var next1 = document.getElementById("next1")
next1.addEventListener("click",scroll_right1)


 

function scroll_right1(event) {
    var content = document.getElementById("cont8")
    content.scrollLeft += 1040;
    event.preventDefault();
    count++;
    var arrow2 = document.getElementById("arrow2")
    var arrow = document.getElementById("arrow")
    if (count!=0){
    next1.style.border = "thin dotted black"
    arrow.style.visibility = 'visible';
    prev1.style.border="none"
    }
  
    if(count>=2){
        count=2;
        next1.style.border = "none"
        arrow2.style.visibility ='hidden'; 
    }
   // console.log(count);
    
   }


   ////////////////////////////////
//    var white1= document.getElementById("white");
//    white1.addEventListener("mouseenter",pop);
//    var black1 = document.getElementById("black");
//    black1.addEventListener("mouseover",pop)
   function pop(event){
    //    var black1 = document.getElementById("black");
    //    black1.style.zIndex ="10";
    //    black1.style.height ="240"+"px"
    //    black1.style.position = "absolute"
    //    black1.style.width ="240"+"px"
    //    black1.style.background="black"
    //    black1.style.transform ="translate(0px,-244px)"
    //    black1.style.opacity="70%"  
    //    document.getElementById("p2").style.visibility="visible"
    //    document.getElementById("white_img1").style.visibility="visible"
    //    console.log("hii")
    event.target.style.filter = "brightness(0.5)"
   }
   function pop2(event){
    event.target.style.filter = "brightness(1)"
   }
//    white1.addEventListener("mouseout",img_show);
//    black1.addEventListener("mouseout",img_show);
//    function img_show(){
//     var black1 = document.getElementById("black");
//     black1.style.height ="0"+"px"
//     black1.style.width ="0"+"px"
//     document.getElementById("p2").style.visibility="hidden"
//     document.getElementById("white_img1").style.visibility="hidden"
//    }
//    var x= document.getElementById("white_img1");
//    x.addEventListener("mouseover",big);

//    function big(){
//        x.style.width ="80px"
//        x.style.transform="translate(10px, 90px)"
//        x.style.marginLeft="75px"
//    }

////////////////////////////////////////
var white11 = document.getElementsByClassName("white1")
//console.log(white11)


