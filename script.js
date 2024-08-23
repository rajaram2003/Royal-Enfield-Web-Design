document.addEventListener('DOMContentLoaded', () => {
    const animatedImg1 = document.querySelector('.animated-img1');
    const animatedImg2 = document.querySelector('.animated-img2');

    // Reset positions on load
    animatedImg1.style.transform = 'translateY(0) translateX(0)';
    animatedImg2.style.transform = 'translateY(-50%) translateX(0)';
});

window.addEventListener('scroll', () => {
    const animatedImg1 = document.querySelector('.animated-img1');
    const animatedImg2 = document.querySelector('.animated-img2');

    // Get the scroll position
    const scrollTop = window.scrollY;

    // Adjust image positions based on scroll
    animatedImg1.style.transform = `translateY(0) translateX(${scrollTop * 0.5}px)`;
    animatedImg2.style.transform = `translateY(-50%) translateX(-${scrollTop * 0.5}px)`;
});


// Animation for the logo
anime({
    targets: '.logo img',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 2000,
    easing: 'easeOutBounce'
});

// Anime.js animation for Home link
anime({
    targets: 'header a', 
    translateX: ['100%', '0%'], 
    opacity: [0, 1], 
    easing: 'easeInOutQuad', 
    duration: 1500, 
    delay: 1000 
});

// Animation for navigation links
anime({
    targets: 'nav ul li a',
    opacity: [0, 1],
    translateX: [-50, 0],
    delay: anime.stagger(100), 
    duration: 1000,
    easing: 'easeOutExpo'
});

// Animation for the heading
anime({
    targets: 'h1',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(200), 
    duration: 1000,
    easing: 'easeOutExpo'
});

// Animation for the paragraph
anime({
    targets: 'p',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 2000,
    easing: 'easeOutExpo',
    delay: 500 // Start after some delay
});

 // Anime.js animation for .boximg .bg
 anime({
    targets: '.boximg .bg',
    translateX: ['-100%', '0%'], 
    easing: 'easeInOutQuad', 
    duration: 2000, 
});

  // Anime.js animation for .boximg img (image)
  anime({
    targets: '.boximg img',
    opacity: [0, 1], 
    easing: 'easeInOutQuad', 
    duration: 2000, 
    delay: 500 
});

anime({
    targets: '.img .bg',
    translateX: ['100%', '0%'], 
    easing: 'easeInOutQuad', 
    duration: 2000, 
});
anime({
    targets: '.leftwrap .img img',
    translateX: ['100%', '15%'], 
    opacity: [0, 1], 
    easing: 'easeInOutQuad', 
    duration: 2000, 
    delay: 500 
});


    