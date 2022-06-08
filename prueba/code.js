const palabras = ['casa', 'perro', 'programacion', 'html', 'css', 'canvas', 'alura', 'computadora', 'celular', 'alimentos', 'dátil', 'durazno',
'damasco', 'donuts', 'dips', 'dulces', 'cereza', 'curuba', 'corozo', 'ciruela', 'cacahuates', 'cacao', 'calabaza', 'camarón', 'canela', 'Gente',
'humanidad','humano','persona','hombre','mujer','bebé','niño', 'niña','adolescente','adulto', 'adulta','anciano', 'anciana','don', 'doña','señor', 'señora','caballero','dama','individuo','Cuerpo', 'humano', 'salud','cuerpo',
'pierna','pie','talón','espinilla','rodilla','muslo','cabeza','cara','boca','labio','diente','ojo','nariz','barba','bigote','cabello','oreja','cerebro','estómago','brazo','codo','hombro','uña','mano','muñeca','palma','dedo','trasero', 'culo', 'cola', 'glúteos'
];

const jugar = document.getElementById('jugar');
const imagen = document.getElementById('imagenes');
const botonesLetras = document.querySelectorAll('#letras button');
 

//click para iniciar el juego
jugar.addEventListener('click', iniciar);

let palabra = '';
let errores = 0;
let acerto = 0;

function iniciar(event){
    imagen.src = 'imagenes/img0.jpg';
    errores = 0;
    acerto = 0;

    jugar.disabled = true; //para que el boton no se pueda tocar dos veces hastq que se adivine la palabra

    const parrafo = document.getElementById('adivinanza');
    parrafo.innerHTML = ''; 

    const cantidadPalabras = palabras.length;
    const amplitud_valores = cantidadPalabras - 0;
    const palabraAzar = Math.floor(Math.random() * amplitud_valores);

    palabra = palabras[palabraAzar]; 
    console.log(palabra)

   const cantidadLetras = palabra.length;
   
   for (let i = 0; i < botonesLetras.length; i++) {
    botonesLetras[i].disabled = false; 
   
    }  //para una vez terminado se habilite el hjuego nuevamente
   
   for (let i = 0; i < cantidadLetras; i++) {
       const span =document.createElement('span') 
     parrafo.appendChild(span)       
   }
}

for (let i = 0; i < botonesLetras.length; i++) {
     botonesLetras[i].addEventListener('click', abecedario) //la funcion se nombra sin parentesis para quer sasocie y no lo ejecute
    
}

//click para adic=vinar las letras
function abecedario(event){

    const spans = document.querySelectorAll('#adivinanza span');
    const button = event.target     //target me dira cual de todos ls elememtos toque
    const letra = button.innerHTML.toUpperCase();
    const palabritas = palabra.toUpperCase();
    button.disabled = true; //desabilitar la letra que ya se toco
   

    let correcto = false;

    for (let i = 0; i < palabritas.length; i++) {
        if(letra == palabritas[i]) {  //si esto es verdadero acerto pasa a true

            spans[i].innerHTML = letra;
            acerto++; //si acertp sumare uno a la cantidad de aciertos
            correcto = true;
        }  

    }

    if (correcto == false){
        errores++;
            const src = `imagenes/img${errores}.jpg`;
            const imagen = document.getElementById('imagenes');
            imagen.src = src;
    }

    if(errores == 8){
        document.getElementById('resultado').innerHTML = ('has fallado la palabra era: ' + palabra)
        game_over();//desabilitara los botones de la letras y habilitara el boton de jugar
    } else if(acerto == palabra.length) {
        document.getElementById('resultados').innerHTML = ('felicidades has ganado')
        game_over(); 
        alert('haz ganado, para iniciar un nuevo jugo pulse el boton volver a jugar')
    }
    console.log(correcto)
}

//final del juego
function game_over(){
    for (let i = 0; i < botonesLetras.length; i++) {
        botonesLetras[i].disabled = true; 
       
   }
   jugar.disabled = false;
}

game_over();


