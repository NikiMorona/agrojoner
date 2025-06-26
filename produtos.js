document.querySelectorAll('.menu-categorias a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

  const menuIcon = document.getElementById('icon-menu-responsive');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  




  
  ScrollReveal().reveal(".logo", {
  origin: "left",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".text01", {
  origin: "right",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".text02", {
origin: "bottom",
  distance: "40px",
  duration: 1000,
  interval: 200,
  opacity: 0
});
ScrollReveal().reveal(".fornecedor", {
origin: "top",
  distance: "40px",
  duration: 1000,
  interval: 200,
  opacity: 0
});
ScrollReveal().reveal(".underline", {
origin: "top",
  distance: "40px",
  duration: 1000,
  interval: 200,
  opacity: 0
});



ScrollReveal().reveal(".title", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});
ScrollReveal().reveal(".img-aloisio", {
  origin: "bottom",
  duration: 4000,
  distance: "5%",
});

ScrollReveal().reveal(".aloisio-joner-s1", {
  origin: "top",
  duration: 4010,
  distance: "5%",
});
ScrollReveal().reveal(".supernova", {
  origin: "top",
  duration: 4000,
  distance: "5%",
});

ScrollReveal().reveal(".maps", {
opacity: 0,
  duration: 1500,
  easing: "ease-in-out"
});

ScrollReveal().reveal(".reveal", {
opacity: 0,
  duration: 1500,
  easing: "ease-in-out"
});

ScrollReveal().reveal(".categoria-titulo", {
opacity: 0,
  duration: 1500,
  easing: "ease-in-out"
});
ScrollReveal().reveal(".banner-right", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  interval: 200,
  opacity: 0
});
