document.addEventListener('DOMContentLoaded', () => {
    const inicioSection = document.querySelector('.inicio');
    const images = [
    'src/imagens-geral/Carrousel/background-1.jpg',
  'src/imagens-geral/Carrousel/background2.jpeg',
  'src/imagens-geral/Carrousel/background-3.png'
    ];
    let currentIndex = 0;

   
    function getBackgroundImageString(index) {
        const image = images[index];
        // Verifica se é a última imagem para decidir se aplica a máscara
        if (index === images.length - 1) {
            return `url("${image}")`;
        } else {
            return `
                linear-gradient(
                    to top right,
                    rgba(93, 125, 8, 0.35),
                    rgba(47, 56, 22, 0.45),
                    rgba(112, 111, 111, 0.65)
                ),
                url("${image}")
            `;
        }
    }

    // --- CONFIGURAÇÃO INICIAL ---
    // Define a primeira imagem na camada de fundo (a principal) ao carregar a página.
    inicioSection.style.backgroundImage = getBackgroundImageString(currentIndex);

    // --- FUNÇÃO PRINCIPAL DO CARROSSEL ---
    function changeBackground() {
        // 1. Pega o índice da PRÓXIMA imagem.
        const nextIndex = (currentIndex + 1) % images.length;
        
        // 2. Prepara a camada da FRENTE (::before) com a próxima imagem.
        // Usamos uma variável CSS (--bg-image-frente) para fazer a mágica.
        const nextImageString = getBackgroundImageString(nextIndex);
        inicioSection.style.setProperty('--bg-image-frente', nextImageString);

        // 3. Ativa a transição, fazendo a camada da frente aparecer suavemente.
        inicioSection.classList.add('fade-in');

        // 4. A "MÁGICA" DO RESET: acontece DEPOIS que a animação terminar.
        setTimeout(() => {
            // Atualiza a camada de FUNDO para ter a mesma imagem que agora está na frente.
            inicioSection.style.backgroundImage = nextImageString;
            
            // Esconde a camada da frente novamente, preparando para o próximo ciclo.
            inicioSection.classList.remove('fade-in');

            // Atualiza o índice atual.
            currentIndex = nextIndex;
        }, 1500); // IMPORTANTE: Este tempo deve ser o mesmo da transição no CSS (1.5s).
    }

    // Inicia o carrossel
    setInterval(changeBackground, 5000); // O intervalo entre as trocas.
});





// header-responsive

  const menuIcon = document.getElementById('icon-menu-responsive');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  //fornecedor-responsive

  const slider = document.querySelector('.fornecedores-slider');
  let scrollPos = 0;

  function autoScroll() {
    scrollPos += 1;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      scrollPos = 0;
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = scrollPos;
    }
  }

  setInterval(autoScroll, 30); // ajuste a velocidade aqui



















  ScrollReveal().reveal(".textos", {
  origin: "left",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".logo", {
  origin: "right",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".card", {
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

ScrollReveal().reveal(".reveal1", {
opacity: 0,
  duration: 1500,
  easing: "ease-in-out"
});
