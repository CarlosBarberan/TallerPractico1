document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      anime({
        targets: button,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        scale: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    anime({
      targets: '.caja',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(200)
    });
  });
  