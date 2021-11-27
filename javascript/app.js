
alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola!');
/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2=18;
let hayClases=true;
let terminoLaClase=false;
/*Tipos,undefined, numero, String Boolean,Objeto, arreglo, chart, función*/
console.log(PI*num2);
console.log(num2 + 36 + " " +otra_variable)
/*Condicionales*/
hayClases=false;
if(hayClases == true && terminoLaClase != true){
    console.log('Nos conectamos a la veideollamada!')
}else{
    console.log('Salimos a celebrar el día del Estudiante!')
}
if(hayClases == false || terminoLaClase == true){
    console.log('Salimos a celebrar el día del Estudiante!');
}

let elemento = document.getElementById("principal");
// console.log(elemento)
elemento.innerHTML="MI valor para innerHTML"
elemento.innerHTML+='<p>' + otra_variable + '</p>';
document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>")
document.write("<h3>Cómo están?</h3>")

// if(nombre_variable == undefined){
//     elemento.innerHTML+="Estamos con una variable sin valor definido!"
//     elemento.innerHTML+="<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elias</p>"
//     elemento.style.backgroundColor="Blue"
//     elemento.style.color="white"
// }


let mensaje = prompt("Introduce tu mensaje: ")
elemento.innerHTML+="<h3>" + mensaje + "</h3>";
// elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\"> "+mensaje+"</div>;"


// let menu = prompt("selecciona el pedido: \" n 1. Milanesa \ n 2. asado \ n 3. pollo")

//     if (menu === '1'){
//     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta tu milamesa</div>;"
//     } else if (menu === '2'){
//     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta tu asado</div>;"
//     }
//     else if (menu === '3'){
//     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta tu pollo</div>;"
//     }else{
//         alert('Debes elegir una opción de menú')
//         let menu = prompt ("selecciona el pedido: \" n 1. Milanesa \ n 2. asado \ n 3. pollo")      
//     }

//     switch(menu) {
//         case '1':
//         elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta tu asado</div>;"
//         break;

//         default:
//         elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta tu asado</div>;"
//         break;
// //     }

//     let num = Number(prompt("Ingrese el primer numero"));
//     let num3 = Number(prompt("ingrese el segundo numero"));

//     let resultado = "El resultado de la suma es de "+num+" y "+num3+" es: "+ (num + num3);

let alumnos = ["petra", "juana", "maria", "sol"];

for(let a=0; a < alumnos.length; a++){
    elemento.innerHTML+= `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5>${alumnos[a]}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>`
;
}

alumnos.push("Barbara")
alumnos[5] = ("Luis")

alumnos.forEach((a, index)=>{
    elemento.innerHTML+= `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5>${index +1}${a}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>`
;
});




