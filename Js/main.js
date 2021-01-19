const buttonToggle = document.getElementById("toggle");
const crossIcon = document.getElementById('fa-times');
const barsIcon = document.getElementById('fa-bars');
const menu = document.getElementById('menu');

barsIcon.addEventListener('click', function(){
 menu.style.transform ="translateX(0)";
 barsIcon.style.display = "none";
 crossIcon.style.display="block";
});

crossIcon.addEventListener('click', function(){
    menu.style.transform ="translateX(-100%)";
    barsIcon.style.display = "block";
    crossIcon.style.display="none";
})


