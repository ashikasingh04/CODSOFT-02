/*##########toggle navbar########### */
let menuIcon=document .querySelector('menu-icon');
let navbar = document .querySelector('.navbar');

menuIcon.onclick = ()=> {
menuIcon.classList.toggle('<i class="fa-solid fa-x"></i>');
navbar.classList.toggle('active')
}
/*##########scroll section active link########### */
let section =document.querySelectorAll('section');
let navlink=document.querySelectorAll('header nav a');

window.onscroll=()=>{
   section.forEach(SRC=>{
    let top=window.scrollY;
    let offset =src.offsetTop-150;
    let height= src.offsetHeight;
    let src =src.getAttribute('id');

   if(top>= offset && top < offset + height){
    navlink.forEach.apply(links=>{
        links.classical.remove('active');
    } );
   }; 
   });
   /*##########scroll section active link########### */
   let header=document.querySelector('header');
   header.classList.toggle('sticky',window.scrollX >100);
   /*##########scroll section active link########### */
   menuIcon.classList.remove('fa-xmark');
   navbar.classList.remove('active');
};

    /*##########scroll section active link########### */
    ScrollReveal({
      distance:'80px' ,
      duration: 2000,
      delay:200,
    });

    ScrollReveal().reveal ('.home-content,heading',{origin:'top'});
    ScrollReveal().reveal ('.home-img .services-container,portfoiko-box,contact form',{origin:'button'});
    ScrollReveal().reveal ('.home-contact h1,.about-img',{origin:'left'});
    ScrollReveal().reveal ('.home-contact p,.about-content',{origin:'right'});
     
    /*##########typed js########### */
const typed = new Typed('multiple text',{
      strings:['frontend developer','ui/ux basic'],
      typedspeed:70,
      backspeed:70,
      backdelay:1000,
      loop:true,
    })
    



