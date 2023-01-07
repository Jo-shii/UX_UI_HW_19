// FOR ACTIVE STATE NAV BAR
console.log("working");

// $(document).ready(function(){
// $(".inlineBlock").click(function(){

//     $(this).addClass("active").siblings().removeClass("active");

// });

// });

// $(document).ready(function () {
  
//     $(".inlineBlock").click(function (){
//       $(this).addClass("active").siblings().removeClass("active");
//     });
//   });

$(document).ready(() => {
    $('.inlineBlock').click(() => {
 $('.inlineBlock').removeClass('active')
   $(this).addClass('active')
    })
  })