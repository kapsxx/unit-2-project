var prev = document.getElementById("prev")
prev.addEventListener("click",scroll_left)

function scroll_left(event) {
   var content = document.getElementById("fade")
   content.scrollLeft += 400;
   event.preventDefault();
  if(content.scrollLeft==400){
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
    content.scrollLeft -= 400;
    event.preventDefault();

    if(content.scrollLeft<=400){
        prev.style.color = "silver"
      }
      else{
        prev.style.color = "grey"
      }
}

  
  

