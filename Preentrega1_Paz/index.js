//  condición del alumno
function determinarCondicion(nota1, nota2) {
    if ((nota1 >= 7 && nota2 >= 7 && nota1 <= 10 && nota2 <= 10) ||
        (nota2 >= 7 && nota1 >= 7 && nota2 <= 10 && nota1 <= 10)) {
        return "Alumno promocionado";
    } else if ((nota1 < 4 && nota2 >= 4) || (nota2 < 4 && nota1 >= 4)) {
        return "Alumno regular - Recuperatorio";
    } else if ((nota1 <= 7 && nota2 > 4) || (nota2 <= 7 && nota1 > 4) ||
            (nota1 < 4 && nota2 >= 4) || (nota2 < 4 && nota1 >= 4)) {
        return "Alumno regular";
    } else if ((nota1 >= 4 && nota1 < 7 && nota2 >= 4 && nota2 < 7) ||
            (nota2 >= 4 && nota2 < 7 && nota1 >= 4 && nota1 < 7)) {
        return "Alumno regular";
    } else if (nota1 < 4 && nota2 < 4) {
        return "Alumno libre";
    } else {
        return "Por favor, ingrese notas válidas (entre 0 y 10).";
    }
}

function simulador() {
    var nota1, nota2;

    //  notas válidas
    do {
        nota1 = prompt("Ingrese la primera nota:");
        nota2 = prompt("Ingrese la segunda nota:");
    
        if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            alert("Por favor, ingrese notas válidas (entre 0 y 10).");
        }
    } while (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10);

    var condicion = determinarCondicion((nota1), (nota2));
    
    alert("La condición del alumno es: " + condicion);
}
simulador();

