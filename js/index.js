// FOR ACTIVE STATE NAV BAR
console.log("working");

// Top Nav Bar Active States

$(function() {
    $("li").click(function() {
       // remove classes from all
       $("li").removeClass("active");
       // add class to the one we clicked
       $(this).addClass("active");
    });
 });

//  Hamburger Menu for responsive

 const Burger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 Burger.addEventListener("click", () => {
   Burger.classList.toggle("active");
   navMenu.classList.toggle("active");
 })