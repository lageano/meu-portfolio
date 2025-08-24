<<<<<<< HEAD
const dadosCardControleMedicamento = {
    titulo: 'Controle de Medicamentos',
    imagem: './assets/ControleMedicamentos.png',
    gif: 'https://i.imgur.com/pKHsY4i.gif',
    urlRepositorio: 'https://github.com/Gustav0W/Controle-de-Medicamentos2.ConsoleApp',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: 'O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições - com foco na rastreabilidade das movimentações de estoque.'
};

const dadosCardGerenciadorPersonagem = {
    titulo: 'Gerenciador de Personagem',
    imagem: './assets/GerenciadorPersonagens.png',
    gif: 'https://i.imgur.com/Kkei5Br.gif',
    urlRepositorio: 'https://github.com/Gustav0W/Gerenciador-De-Personagens-2025',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: 'O sistema de Gerenciador de Personagens está sendo feito com o intuito de auxiliar na criação de personagens para RPG de mesa. Ele ainda está simples e em desenvolvimento, porém os planos são deixá-lo cada vez melhor, e em algum momento liberá-lo na internet para auxiliar qualquer um. Creio que seja meu projeto principal e o que mais tenho vontade de desenvolver cada vez mais, no resto do curso, e nos meses seguintes.'
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio')

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleMedicamento)
        return;

    cardSelecionado = dadosCardControleMedicamento;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardGerenciadorPersonagem)
        return;

    cardSelecionado = dadosCardGerenciadorPersonagem;
    carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("selecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("selecionarSegundoCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto");

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();


};

document.addEventListener('DOMContentLoaded', main);
=======
// Modern Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initScrollAnimations();
    initSkillBars();
    initCounters();
    initBackToTop();
    initSmoothScroll();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Active nav link
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger skill bars animation
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
                
                // Trigger counter animation
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .stat-item, .timeline-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    // This will be triggered by scroll animation
}

function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    if (progressBar && !progressBar.classList.contains('animated')) {
        const width = progressBar.getAttribute('data-width');
        setTimeout(() => {
            progressBar.style.width = width;
            progressBar.classList.add('animated');
        }, 200);
    }
}

// Counter animation
function initCounters() {
    // This will be triggered by scroll animation
}

function animateCounter(statItem) {
    const counter = statItem.querySelector('.stat-number');
    if (counter && !counter.classList.contains('animated')) {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
        
        counter.classList.add('animated');
    }
}

// Back to top button
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-subtitle, .hero-title, .hero-description, .social-links');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Contact form functionality (if needed in the future)
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    }
}

// Utility function for debouncing scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Add any scroll-based functionality here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Mobile menu improvements
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            // Add custom mobile menu animations if needed
        });
    }
});

// Preloader (optional)
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
}

// Initialize preloader if it exists
initPreloader();

>>>>>>> 7aba45f (Primeiro commit - Portfólio)
