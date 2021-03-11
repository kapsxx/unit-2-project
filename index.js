
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