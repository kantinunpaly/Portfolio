$(document).ready(function(){

    // jQuery methods go here...

  
    $("img").click(function(){
      var img=$(this).attr('src');
        $("#show-img").attr('src',img);
        $("#imgmodal").modal('show');
   });
  jQuery(document).ready(function() {
            function animateSkillBars() {
                jQuery('.skillbar').each(function() {
                    var elementPos = jQuery(this).offset().top;
                    var topOfWindow = jQuery(window).scrollTop();
                    var windowHeight = jQuery(window).height();

                    if (elementPos < topOfWindow + windowHeight - 100) {
                        jQuery(this).find('.skillbar-bar').animate({
                            width: jQuery(this).attr('data-percent')
                        }, 2000);
                    }
                });
            }

            jQuery(window).on('scroll', animateSkillBars);
            animateSkillBars(); // Call once to animate skill bars that are already in view
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
document.querySelectorAll('.nav').forEach(function(element) {
  element.addEventListener('click', function(e) {
      e.preventDefault(); // ป้องกันการนำทางไปยังลิงก์ทันที

      // ลบ class 'active' จากทุกลิงก์
      document.querySelectorAll('.nav').forEach(function(nav) {
          nav.classList.remove('active');
      });

      // เพิ่ม class 'active' ให้กับลิงก์ที่คลิก
      element.classList.add('active');

      // เลื่อนหน้าจอไปยัง section ที่ต้องการโดยเว้นระยะ 300px
      let targetId = element.getAttribute('href').substring(1);
      let targetSection = document.getElementById(targetId);
      let offsetTop = targetSection.offsetTop - 100;

      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });

      // ปิดแถบการนำทางในโหมด responsive
      if (window.innerWidth <= 576) {
          let navbarToggler = document.querySelector('.navbar-toggler');
          let navbarCollapse = document.querySelector('#navbarNav');

          if (navbarCollapse.classList.contains('show')) {
              navbarToggler.click();
          }
      }
  });
});
});
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#050505';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav');
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150; // เพิ่มระยะเว้น 300px
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('.navbar-nav .nav[href*=' + id + ']').classList.add('active');
          });
      }
  });
};