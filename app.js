  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.innerHTML = nav.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Auto close on link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

