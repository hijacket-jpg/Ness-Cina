document.addEventListener("DOMContentLoaded", () => {
    
    const btnIniciar = document.getElementById('btn-iniciar');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const audio = document.getElementById('musica');
    const contenedorParticulas = document.getElementById('contenedor-particulas');

    
    const elementosTexto = document.querySelectorAll('.pergamino h2, .pergamino p, .pergamino .firma');
    
    elementosTexto.forEach(elemento => {
        const texto = elemento.textContent;
        elemento.textContent = ''; 
        
        
        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];
            if (char === ' ') {
                
                elemento.appendChild(document.createTextNode(' '));
            } else {
                
                let span = document.createElement('span');
                span.textContent = char;
                span.className = 'letra-burbuja';
                elemento.appendChild(span);
            }
        }
    });

    
    btnIniciar.addEventListener('click', () => {
        pantallaInicio.classList.add('oculto');
        
        setTimeout(() => {
            pantallaInicio.style.display = 'none';
            
            if (window.innerWidth <= 900) {
                contenidoPrincipal.style.display = 'flex';
            } else {
                contenidoPrincipal.style.display = 'block';
            }
            
            iniciarParticulas();
            audio.play();
        }, 800); 
    });

    window.addEventListener('resize', () => {
        if (pantallaInicio.style.display === 'none') {
            if (window.innerWidth <= 900) {
                contenidoPrincipal.style.display = 'flex';
            } else {
                contenidoPrincipal.style.display = 'block';
            }
        }
    });

    
    function iniciarParticulas() {
        setInterval(() => {
            crearCorazon();
        }, 400);
    }

    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.classList.add('particula-corazon');
        
        const simbolos = ['❤', ':3', '✨', '🐢', 'la más insana', 'se le kere'];
        corazon.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
        
        corazon.style.left = Math.random() * 100 + 'vw';
        
        const tamaño = Math.random() * 1.5 + 1;
        corazon.style.fontSize = tamaño + 'rem';
        
        const duracion = Math.random() * 5 + 5;
        corazon.style.animationDuration = duracion + 's';
        
        contenedorParticulas.appendChild(corazon);
        
        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
    }
});