
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
 function show_msg(){
      
     
var signin_email = document.getElementById('signin-email').value;

//console.log(signin_email)
localStorage.setItem("signin_email",signin_email);
localStorage.getItem('signin_email');
//console.log(signin_email);
   
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
      alert('give the email in correct order i.e., alphabets-or-number@domainname.com');
    }
}
for ( var j = 0; j < signin_email.length; j++){
    if ( signin_email[j] == '@'){
        lenbefore = j;
        if ( lenbefore > 0){
            t =true;
        }else{
            alert('give sometihng before @');
        }
    if ( signin_email[j] == '.'){
        lenbefore1 = j;
        if ( lenbefore1> lenbefore){
            t =  true;
        }else {
            alert('give domain name before .');
        }
    }    
    } 
   
} if ( t= true){
    var signin_form = document.getElementById('signin-form');
    var policy = document.getElementById('policy');
    var s_form = document.getElementById('sform');
    var s_btn = document.getElementById('sbtn');
    var signin_mail = document.getElementById('signin-email');

    policy.style.display = "none";
    s_form.style.display = "none";
    s_btn.style.display = "none";
    signin_mail.style.display = "none";
     var p1 = document.createElement('p');
     p1.innerText = `You're on the list
                          Check youe inbox for the latest on R+F products,
                          news, and special offers.`
    signin_form.appendChild(p1);
    p1.setAttribute('id', 'p1');

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


 }

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

