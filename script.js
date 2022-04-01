var menu = "close";

function menuMobile(){
 var mobileMenu = document.getElementById('mobile-menu');
 if(menu = 'close'){
     mobileMenu.style.width = "100%";
     mobileMenu.style.height = "200px";
     menu = 'open';
 }else{
   mobileMenu.style.width = "0%";
   mobileMenu.style.height = "10px";
   menu = "close";
 }
}