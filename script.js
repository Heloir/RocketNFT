const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'


function animeScroll(){
 const windowtop = window.pageYOffset + ((window.innerHeight * 3) / 4);
 target.forEach(function(element){
   if((windowtop) > element.offsetTop){
     element.classList.add(animationClass)
   } else{
    element.classList.remove(animationClass)
   }
   console.log(element.offsetTop)

 })
}

window.addEventListener('scroll', function(){
  animeScroll();
})