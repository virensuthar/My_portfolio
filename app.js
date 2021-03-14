const profile = document.querySelector('.profile');

const tl = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 1.5 } });

tl.from('.profile', { x: '-40%' });
