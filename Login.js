document.getElementById("Sign-in-click").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
});

document.getElementById("login-click").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
});