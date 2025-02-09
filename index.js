const boton = document.querySelector('.boton');
const name= " Kat (Katsumi)";
const contenido = document.querySelector('.contenido');

boton.addEventListener('click',()=>{
    let titulo = document.querySelector('.titulo-principal');
    titulo.textContent = titulo.textContent + name;
    contenido.style.opacity="1";
    boton.classList.add('ocultar');
    setTimeout(()=>{
        boton.style.display='none';
        crearBoton()
    },500)

    //setTimeout(crearBoton(),600);
});

function crearBoton(){
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        // Posición inicial aleatoria
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.animationDuration = 4 + Math.random() * 2 + 's';
        balloon.style.background = getRandomColor();
      
        document.body.appendChild(balloon);
      
        // Eliminar el globo una vez que termine su animación
        balloon.addEventListener('animationend', () => {
          balloon.remove();
        });
      }
      
      function getRandomColor() {
        const colors = ['#FF69B4', '#FF4500', '#FFD700', '#00FF7F', '#1E90FF'];
        return colors[Math.floor(Math.random() * colors.length)];
      }


    let footer = document.querySelector('footer');
        let nuevoBoton= document.createElement('button')
        nuevoBoton.classList.add('boton');
        let textoBoton = document.createTextNode('Apretame de nuevo')
        nuevoBoton.appendChild(textoBoton);
        footer.appendChild(nuevoBoton);
        nuevoBoton.addEventListener('click',()=>{
            for (let i = 0; i < 20; i++) {
                createBalloon();
            }
        })

            
}