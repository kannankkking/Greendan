    

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function() {
    sidenav.style.right = "0"; // Open the sidenav
});

closenav.addEventListener("click", function() {
    sidenav.style.right = "-50%"; // Close the sidenav
});
