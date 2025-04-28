// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Navegar a secciones suavemente
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cerrar el menú móvil si está abierto
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajustar para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menú móvil toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Toggle de tema oscuro
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Comprobar si hay una preferencia guardada
    const darkMode = localStorage.getItem('darkMode');
    
    // Si existe una preferencia previa, aplicarla
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Si el body tiene la clase dark-mode, quitarla, sino agregarla
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }
    
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        
        // Cambiar el icono de la luna al sol
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
        
        // Actualizar el header para el tema oscuro
        updateHeaderForTheme();
    }
    
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
        
        // Cambiar el icono del sol a la luna
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
        
        // Actualizar el header para el tema claro
        updateHeaderForTheme();
    }
    
    // Animación de entrada para las secciones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar las secciones para animarlas
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animated');
        observer.observe(section);
    });
    
    // Animación para las barras de habilidades
    const skillObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-level');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.width = item.style.width; // Triggerear la animación
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar la sección de habilidades
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
    
    // Inicializar contador de años de experiencia (si existe el elemento)
    const experienceYears = document.querySelector('.experience-years');
    if (experienceYears) {
        const targetYears = parseInt(experienceYears.getAttribute('data-years')) || 3;
        let currentYears = 0;
        
        const yearCounter = setInterval(() => {
            experienceYears.textContent = currentYears;
            currentYears++;
            
            if (currentYears > targetYears) {
                clearInterval(yearCounter);
            }
        }, 100);
    }
    
    // Efecto de typing para el texto del hero (opcional)
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const textArray = JSON.parse(typingText.getAttribute('data-text'));
        let textIndex = 0;
        let charIndex = 0;
        let isTyping = true;
        
        function typeText() {
            const currentText = textArray[textIndex];
            
            if (isTyping) {
                // Escribiendo
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex >= currentText.length) {
                    isTyping = false;
                    setTimeout(typeText, 1500); // Pausa después de escribir
                } else {
                    setTimeout(typeText, 100); // Velocidad de escritura
                }
            } else {
                // Borrando
                typingText.textContent = currentText.substring(0, charIndex);
                charIndex--;
                
                if (charIndex < 0) {
                    isTyping = true;
                    textIndex = (textIndex + 1) % textArray.length;
                    setTimeout(typeText, 500); // Pausa antes de escribir la siguiente palabra
                } else {
                    setTimeout(typeText, 50); // Velocidad de borrado
                }
            }
        }
        
        // Iniciar el efecto de typing
        setTimeout(typeText, 1000);
    }
    
    // Cambiar header al scrollear
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            if (body.classList.contains('dark-mode')) {
                header.style.background = 'var(--dark-color)';
            } else {
                header.style.background = 'white';
            }
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            if (body.classList.contains('dark-mode')) {
                header.style.background = 'rgba(17, 24, 39, 0.95)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            header.style.boxShadow = 'none';
        }
    });
    
    // Actualizar header cuando cambie el tema
    function updateHeaderForTheme() {
        if (body.classList.contains('dark-mode')) {
            if (window.scrollY > 100) {
                header.style.background = 'var(--dark-color)';
            } else {
                header.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        } else {
            if (window.scrollY > 100) {
                header.style.background = 'white';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    }
}); 