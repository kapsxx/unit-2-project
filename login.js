var button = document.getElementById("button");

function login(e) {
  e.preventDefault();
  var usernameFromStorage = document.getElementById("username").value;
  var passwordFromStorage = document.getElementById("password").value;
  var userData = localStorage.getItem("userDetails", data);
  var data = JSON.parse(userData);
  if (usernameFromStorage.length <= 0) {
    alert("Enter Username and Password");
  } else {
    if (usernameFromStorage == data.username && passwordFromStorage == data.password) {
      alert("Login Successfull");
      window.location.href = "index.html";
    } else {
      alert("Invalid Username or Password");
    }
  }
}
function signPage() {
  window.location.href = "signup.html";
}
document.getElementById("signup").addEventListener("click", signPage);
button.addEventListener("click", login);
