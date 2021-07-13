let menu_bar = document.querySelector('#menu_bar');
let header = document.querySelector('header');
let icon = document.querySelector('#icon');
let back_to = document.querySelector('#back_to_top');

menu_bar.onclick = () =>{
    menu_bar.classList.toggle('fa-times');
    header.classList.toggle('active');
}
menu_bar.onscroll = () =>{
    menu_bar.classList.remove('fa-times');
    header.classList.remove('active');
}

icon.onclick = () =>{
    document.body.classList.toggle('other_theme');
    icon.classList.toggle('.fa-moon');
}

$(document).ready(function(){
    $(window).scroll(function(){
       
     if($(Window).scrollTop () > 200){
       $('#back_to_top').fadeIn(250);
     }
     else{
       $('#back_to_top').fadeOut(250);
     }
 
    });
   });