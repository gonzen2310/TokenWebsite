var button = document.querySelectorAll(".btn-link");
var clothe = document.querySelector("#clothing");

console.log(clothe);
button.forEach(function(t){
    t.addEventListener("click", function(){
        clothe.innerHTML = t.id;
    });
});