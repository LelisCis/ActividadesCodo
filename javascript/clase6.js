/*funciones*/
let elemento = document.getElementById("principal")

const suma=()=>{
    elemento.innerHTML=58+23;
}
suma()
const sumar=(a = 0, b = 0)=>{
    elemento.innerHTML+=`<p> ${a + b}</p>`;
}
sumar(5,89);
sumar(6,8);
sumar(7,9);
sumar(56);
sumar()
window.edad=56;

function Persona(nombre, apellido, edad, dni){
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    }
    let Luis = new Persona("Luis", "navas", 48, 95658821);
    let Pedro = new Persona("Pedro", "Carreño", 85, 34343434);
    console.log(Pedro);
    console.log(Luis);

    elemento.innerHTML= `<p> Nombre: ${Luis.nombre} Apellido: ${Luis.apellido} edad: ${Luis.edad} </p>`



