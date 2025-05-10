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