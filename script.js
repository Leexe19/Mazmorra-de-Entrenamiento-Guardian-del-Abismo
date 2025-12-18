// script.js - Funcionalidad completa para Rango E

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuRangos = document.querySelector('.menu-rangos');
    const pisosContainer = document.getElementById('pisos-rango-e');
    const detallesContainer = document.getElementById('detalles-piso');
    
    const btnVolver = document.querySelector('.btn-volver');
    const btnVolverDetalles = document.querySelector('.btn-volver-detalles');
    
    const botonesPiso = document.querySelectorAll('.piso');
    const tituloDetalles = document.getElementById('titulo-detalles');
    const listaEnemigos = document.getElementById('lista-enemigos');
    const textoMapa = document.getElementById('texto-mapa');
    const textoNotas = document.getElementById('texto-notas');
    
    // Botón del Rango E
    const btnRangoE = document.querySelector('.rango-e');
    
    // Variables para control de fondo
    const body = document.body;
    const fondoOriginal = "url('https://i.imgur.com/STMJXxz.png')";
    const fondoRuinas = "url('https://i.imgur.com/K8LBMoX.png')";
    let fondoActual = 'original';
    
    // Datos de los pisos
    const datosPisos = {
        1: {
            titulo: "Piso 1",
            enemigos: [
                { nombre: "Goblin", cantidad: 6, enlace: "https://nivel20.com/games/dnd-5/creatures/190-goblin" }
            ],
            mapa: "Semibosque",
            notas: "Primer piso de entrenamiento. Ideal para aprender las mecánicas básicas de combate."
        },
        2: {
            titulo: "Piso 2",
            enemigos: [
                { nombre: "Rata Gigante", cantidad: 4, enlace: "https://nivel20.com/games/dnd-5/creatures/170-giant-rat" },
                { nombre: "Goblin", cantidad: 3, enlace: "https://nivel20.com/games/dnd-5/creatures/190-goblin" }
            ],
            mapa: "Túneles naturales / Raíces",
            notas: "Combina enemigos de diferentes tipos. Atención a los ataques por sorpresa en espacios cerrados."
        },
        3: {
            titulo: "Piso 3",
            enemigos: [
                { nombre: "Lobo", cantidad: 4, enlace: "https://nivel20.com/games/dnd-5/creatures/198-wolf" }
            ],
            mapa: "Cueva amplia con columnas de piedra",
            notas: "Los lobos pueden usar trabajo en equipo. Mantén la formación y protege a los miembros más débiles."
        },
        4: {
            titulo: "Piso 4",
            enemigos: [
                { nombre: "Esqueleto", cantidad: 4, enlace: "https://nivel20.com/games/dnd-5/creatures/170-skeleton" }
            ],
            mapa: "Ruinas antiguas / Sala de piedra",
            notas: "Los esqueletos tienen resistencia a ciertos tipos de daño. Usa armas contundentes."
        },
        5: {
            titulo: "Piso 5",
            enemigos: [
                { nombre: "Bandido", cantidad: 2, enlace: "https://nivel20.com/games/dnd-5/creatures/168-bandit" }
            ],
            mapa: "Sala derrumbada / Refugio natural",
            notas: "Descanso corto posible. Los bandidos son inteligentes y pueden usar tácticas básicas."
        },
        6: {
            titulo: "Piso 6",
            enemigos: [
                { nombre: "Araña Gigante", cantidad: 1, enlace: "https://nivel20.com/games/dnd-5/creatures/168-giant-spider" }
            ],
            mapa: "Caverna con telarañas y desniveles",
            notas: "Enemigo único pero peligroso. Cuidado con el veneno y las telarañas que inmovilizan."
        },
        7: {
            titulo: "Piso 7",
            enemigos: [
                { nombre: "Gnoll", cantidad: 2, enlace: "https://nivel20.com/games/dnd-5/creatures/191-gnoll" }
            ],
            mapa: "Caverna abierta / Terreno irregular",
            notas: "Los gnolls son feroces y atacan sin descanso. No subestimes su salvajismo."
        },
        8: {
            titulo: "Piso 8",
            enemigos: [
                { nombre: "Hobgoblin", cantidad: 1, enlace: "https://nivel20.com/games/dnd-5/creatures/192-hobgoblin" },
                { nombre: "Goblin", cantidad: 3, enlace: "https://nivel20.com/games/dnd-5/creatures/190-goblin" }
            ],
            mapa: "Sala de guardia / Pasillo fortificado",
            notas: "Combate táctico. El hobgoblin dirige a los goblins. Enfócate primero en el líder."
        },
        9: {
            titulo: "Piso 9",
            enemigos: [
                { nombre: "En preparación", cantidad: 1, enlace: "#" }
            ],
            mapa: "Por definir",
            notas: "Próximamente..."
        },
        10: {
            titulo: "Piso 10 - Ruinas del Castillo",
            enemigos: [],
            mapa: "Ruinas de un castillo antiguo - Patio interior derruido con murallas parcialmente en pie",
            notas: "🏰 ¡HAS COMPLETADO LOS 9 PISOS DEL RANGO E! 🏰\n\nEstas ruinas de castillo, testigo de batallas pasadas, ofrecen refugio seguro entre sus piedras milenarias. El eco de los combates ha sido reemplazado por el silencio protector de estas murallas derruidas.\n\n• Toma un descanso largo o corto\n• Recupera todos tus puntos de golpe\n• Recupera habilidades de clase y hechizos\n• Prepara tu equipo para los próximos rangos\n\nEl viento susurra entre las piedras: 'Descansa, aventurero, tu viaje apenas comienza.'"
        }
    };
    
    // Función para cambiar fondo
    function cambiarFondo(pisoNumero) {
        if (pisoNumero === 10) {
            body.style.backgroundImage = fondoRuinas;
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
            fondoActual = 'ruinas';
        } else if (fondoActual === 'ruinas') {
            body.style.backgroundImage = fondoOriginal;
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
            fondoActual = 'original';
        }
    }
    
    // Restaurar fondo original al volver
    function restaurarFondoOriginal() {
        body.style.backgroundImage = fondoOriginal;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        fondoActual = 'original';
    }
    
    // Mostrar pisos al hacer clic en Rango E
    btnRangoE.addEventListener('click', function(e) {
        e.preventDefault();
        menuRangos.style.display = 'none';
        pisosContainer.style.display = 'block';
        restaurarFondoOriginal();
    });
    
    // Volver al menú de rangos desde pisos
    btnVolver.addEventListener('click', function() {
        pisosContainer.style.display = 'none';
        menuRangos.style.display = 'block';
        restaurarFondoOriginal();
    });
    
    // Volver a pisos desde detalles
    btnVolverDetalles.addEventListener('click', function() {
        detallesContainer.style.display = 'none';
        pisosContainer.style.display = 'block';
        restaurarFondoOriginal();
    });
    
    // Funcionalidad para cada piso
    botonesPiso.forEach(function(piso) {
        piso.addEventListener('click', function() {
            const numeroPiso = parseInt(this.getAttribute('data-piso'));
            const datosPiso = datosPisos[numeroPiso];
            
            // Cambiar fondo si es piso 10
            cambiarFondo(numeroPiso);
            
            // Actualizar título
            tituloDetalles.textContent = datosPiso.titulo;
            
            // Actualizar lista de enemigos
            listaEnemigos.innerHTML = '';
            if (datosPiso.enemigos.length > 0) {
                datosPiso.enemigos.forEach(function(enemigo) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = enemigo.enlace;
                    a.target = "_blank";
                    a.textContent = `${enemigo.nombre} x${enemigo.cantidad}`;
                    li.appendChild(a);
                    listaEnemigos.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.innerHTML = "🏰 <strong>ZONA SEGURA</strong> - Sin enemigos 🏰";
                li.style.color = "#4CAF50";
                li.style.fontStyle = "italic";
                li.style.fontSize = "1.1rem";
                li.style.padding = "0.5rem";
                li.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
                listaEnemigos.appendChild(li);
            }
            
            // Actualizar mapa
            textoMapa.textContent = datosPiso.mapa;
            
            // Actualizar notas (manteniendo saltos de línea)
            textoNotas.innerHTML = datosPiso.notas.replace(/\n/g, '<br>');
            
            // Mostrar detalles
            pisosContainer.style.display = 'none';
            detallesContainer.style.display = 'block';
        });
    });
});
// Función para cambiar fondo con efecto fade (versión simple)
function cambiarFondo(pisoNumero) {
    if (pisoNumero === 10 && fondoActual !== 'ruinas') {
        // Cambiar a ruinas
        body.classList.add('cambiando-fondo');
        
        setTimeout(function() {
            body.style.backgroundImage = fondoRuinas;
            fondoActual = 'ruinas';
            
            setTimeout(function() {
                body.classList.remove('cambiando-fondo');
            }, 100);
        }, 1000);
        
    } else if (pisoNumero !== 10 && fondoActual === 'ruinas') {
        // Volver al fondo original
        body.classList.add('cambiando-fondo');
        
        setTimeout(function() {
            body.style.backgroundImage = fondoOriginal;
            fondoActual = 'original';
            
            setTimeout(function() {
                body.classList.remove('cambiando-fondo');
            }, 100);
        }, 1000);
    }
}

// Modificar el evento click de los pisos:
botonesPiso.forEach(function(piso) {
    piso.addEventListener('click', function() {
        const numeroPiso = parseInt(this.getAttribute('data-piso'));
        const datosPiso = datosPisos[numeroPiso];
        
        // Cambiar fondo con efecto fade
        cambiarFondo(numeroPiso);
        
        // Actualizar título
        tituloDetalles.textContent = datosPiso.titulo;
        
        // Actualizar lista de enemigos
        listaEnemigos.innerHTML = '';
        if (datosPiso.enemigos.length > 0) {
            datosPiso.enemigos.forEach(function(enemigo) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = enemigo.enlace;
                a.target = "_blank";
                a.textContent = `${enemigo.nombre} x${enemigo.cantidad}`;
                li.appendChild(a);
                listaEnemigos.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.innerHTML = "🏰 <strong>ZONA SEGURA</strong> - Sin enemigos 🏰";
            li.style.color = "#4CAF50";
            li.style.fontStyle = "italic";
            li.style.fontSize = "1.1rem";
            li.style.padding = "0.5rem";
            li.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
            listaEnemigos.appendChild(li);
        }
        
        // Actualizar mapa
        textoMapa.textContent = datosPiso.mapa;
        
        // Actualizar notas (manteniendo saltos de línea)
        textoNotas.innerHTML = datosPiso.notas.replace(/\n/g, '<br>');
        
        // Mostrar detalles después de un breve delay para la animación
        setTimeout(function() {
            pisosContainer.style.display = 'none';
            detallesContainer.style.display = 'block';
        }, 500);
    });
});