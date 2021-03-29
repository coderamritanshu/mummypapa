var txt = ("Wish You A Happy Holi Mummy Ji and Pita Ji");
var t = 0;
function typeWriter(){
    document.getElementById("text").innerHTML += txt.charAt(t);
    t++;
}
    setInterval(typeWriter,79);