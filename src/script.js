 let body = document.querySelector('body'); 
        
        let hearts = document.querySelectorAll('.heart');
        let scroll = document.querySelector('.scroll');
        
        let menu = document.querySelector('.menu');
        
        let all = document.querySelector('.all');

        let sidebar = document.querySelector('#sidebar');
             
        let close = document.querySelector('.close');
        
        let container = document.querySelector('#container');  
        
  hearts.forEach(heart =>{
   heart.addEventListener("click",()=>{
      if(heart.style.color === 'white') {
      heart.style.color = 'red';
heart.style.backgroundColor='#ffffffb3';
      }else {
      heart.style.color = 'white';   
heart.style.backgroundColor='#ffffff55';
      }
   });
  });
  
window.addEventListener('scroll', ()=>{
   if(window.pageYOffset > 300) {
   scroll.classList.add('active');
   }else{
 scroll.classList.remove('active'); 
   }
});

menu.addEventListener('click',()=>{
    sidebar.style.left='0px';
     container.classList.add('readonly');
 body.classList.add('no-scroll');
})

close.addEventListener('click',()=>{
    sidebar.style.left='-100%';
    container.classList.remove('readonly');
     body.classList.remove('no-scroll');
})


all.addEventListener('click',()=>{
    sidebar.style.left='0px';
    container.classList.add('readonly');
 body.classList.add('no-scroll');
})

close.addEventListener('click',()=>{
    sidebar.style.left='-100%';
    container.classList.remove('readonly');
     body.classList.remove('no-scroll');
})