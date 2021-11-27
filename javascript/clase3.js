/*funciones*/

function calcular(){
    let num1 = Number(prompt('ingrese el primer número'));
    let num2 = Number(prompt('ingrese el segundo número'));
    let op =  prompt("Elija el tipo de operación: \n + Para sumar \n - Para restar \n * Para multiplicar \n /Para dividir");
    let resultado = 0;

    let elemento = document.getElementById("principal");
    if(op === "+"){
        resultado = num1 + num2;
        elemento.innerHTML+= "<p> El resultado de la suma de "+num1+" y "+num2+" es: "+resultado+" </p>"

    }else if (op === "-"){
        resultado = num1 - num2;
        elemento.innerHTML+= "<p> El resultado de la resta de "+num1+" y "+num2+" es: "+resultado+" </p>"
       
    }else if (op === "*"){
        resultado = num1 * num2;
        elemento.innerHTML+= "<p> El resultado de la multiplicación de "+num1+" y "+num2+" es: "+resultado+" </p>"
        
    }else if (op === "/"){
        resultado = num1 / num2;
        elemento.innerHTML+= "<p> El resultado de la división de "+num1+" y "+num2+" es: "+resultado+" </p>"
        }else{
            elemento.innerHTML+= "El valor ingresado es incorrecto"
        }
        
    }


 