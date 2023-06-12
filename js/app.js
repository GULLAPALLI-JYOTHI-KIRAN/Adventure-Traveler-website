function Outter() {
    const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector(".navbar-container");
const close_icon=document.querySelector('.close-button');
const sideBarContainer=document.querySelector('.sidebar-container');
const sidelink=document.querySelectorAll('.sidebar-link');
const yearDate=document.getElementById('dateyear');
hamburger.addEventListener('click',function(){
    sideBarContainer.style.left="0%"
    sideBarContainer.style.transition="left 1s linear";
    });
close_icon.addEventListener('click',function(){
    closed();
})
const everyYear=new Date()
yearDate.innerText=everyYear.getFullYear();
window.addEventListener("scroll",function(){
    let scrollingValue=window.scrollY;
    let screenwidth=window.innerWidth>=992 ? 100 : 90;
    if(scrollingValue>=screenwidth){
        navbar.classList.add("nav-sticky");
    }
    else{
        navbar.classList.remove("nav-sticky");

    }
})
function closed(){
    sideBarContainer.style.left="-100%"
    sideBarContainer.style.transition="left 1s linear";
}
sidelink[0].addEventListener('click',function(){
    closed();
});
sidelink[1].addEventListener('click',function(){
    closed();
});
sidelink[2].addEventListener('click',function(){
    closed();
});
sidelink[3].addEventListener('click',function(){
    closed();
});
sidelink[4].addEventListener('click',function(){
    closed();
});
sidelink[5].addEventListener('click',function(){
    closed();
});
sidelink[6].addEventListener('click',function(){
    closed();
});
}
Outter()
