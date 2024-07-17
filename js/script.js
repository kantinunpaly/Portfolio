$(document).ready(function(){

    // jQuery methods go here...

  
    $("img").click(function(){
      var img=$(this).attr('src');
        $("#show-img").attr('src',img);
        $("#imgmodal").modal('show');
   });
   jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
    } else {
        alert('Please fill out all fields.');
    }
});
document.querySelectorAll('.nav a').forEach(function(element) {
  element.addEventListener('click', function() {
      document.querySelectorAll('.nav a').forEach(function(nav) {
          nav.classList.remove('active');
      });
      element.classList.add('active');
  });
});




   
  });
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('#navbar');
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }