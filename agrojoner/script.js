  const menuIcon = document.getElementById('icon-menu-responsive');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
  });