var button = document.getElementById("button");
function storeDetails(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name.length <= 0) {
    alert("Enter Required Details");
  } else {
    let user = new Object();
    user.username = name;
    user.number = number;
    user.email = email;
    user.password = password;
    let data = JSON.stringify(user);
    console.log(data);
    localStorage.setItem("userDetails", data);
    window.location.href = "login.html";
  }
}
button.addEventListener("click", storeDetails);
