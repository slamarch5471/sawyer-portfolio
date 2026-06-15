// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Reveal animations on scroll

const revealElements = document.querySelectorAll(
    '.card, .project-card, .stat'
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition =
        'all 0.7s ease';

});

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();


// Active nav highlighting

const sections =
    document.querySelectorAll('section');

const navLinks =
    document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
                section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(
            link.getAttribute('href') ===
            '#' + current
        ){
            link.classList.add('active');
        }

    });

});


// Hero fade effect

window.addEventListener('scroll', () => {

    const hero =
        document.querySelector('header');

    const scrollY =
        window.scrollY;

    hero.style.opacity =
        Math.max(
            1 - scrollY / 800,
            0.5
        );

});
