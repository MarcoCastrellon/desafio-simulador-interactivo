let nota1 =  Number( prompt("Ingrese el resultado del primer examen"));
let nota2 =  Number( prompt("Ingrese el resultado del segundo examen"));
let nota3 =  Number( prompt("Ingrese el resultado del tercer examen"));

function calcularPromedio (nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3) / 3 ;
    if(resultado >= 7) {
        document.write(`Usted aprobo el cuatrimestre con un promedio de ${resultado}`)
    } else if (resultado < 7) {
        document.write(`Usted desaprobo el cuatrimestre con un promedio de ${resultado}`)
    }

    return resultado;
}

const resultado = calcularPromedio(nota1, nota2, nota3);
 console.log(resultado)


