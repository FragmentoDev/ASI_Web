$(document).ready(function() {
    var Array = ["<p>Con tu carpeta</br>asfáltica dañada<p>", "<p>hola mundo2<p>", "<p>hola mundo 3</p>", "<p>hola mundo 4</p>"];
    var num = 0;
    $('.owl-next').click(function() {

        if (num < Array.length - 1) {
            num++;
        } else {
            num = 0;
        }
        document.getElementById("texto").innerHTML = Array[num];
    })

    $('.owl-prev').click(function() {

        if (num > 0) {
            num--;
        } else {
            num = Array.length - 1;
        }
        document.getElementById("texto").innerHTML = Array[num];
    })
})