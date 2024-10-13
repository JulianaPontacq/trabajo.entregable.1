import * as rs from "readline-sync";

let cantidadConcursantes: number;
let puntajeSabor: number;
let puntajePresentacion: number;
let puntajeDificultad: number; 
let mayorPuntaje: number;
let calcularPuntaje: number;

console.log("Concurso de pastel en Tres Arroyos\n");
cantidadConcursantes = rs.questionInt("Ingrese cantidad de concursantes: ");

console.log("" );
puntajeSabor = rs.questionInt ("Ingrese puntaje de sabor: ");

console.log("");
puntajePresentacion = rs.questionInt (" Ingrese puntaje de presentacion: ");

console.log("");
puntajeDificultad = rs.questionInt("Ingrese puntaje de dificultad: "); 

console.log("-----------------------------------");

calcularPuntaje= puntajeSabor + puntajePresentacion + puntajeDificultad;
console.log("Total de puntaje: "  + calcularPuntaje);


//Entiendo el proceso de lo que se pide, pero no me doy cuenta en que hacer por ejemplo, si hay cinco participantes en como comparar el puntajde de uno con el del otro.
//Yo estoy seguro que si hubiera resuelto eso, ya hubiera sabido hacer que a mayor puntaje "este participante gana el concurso".
//En caso de empato "Partipante 1 y 3 ganan el primer premio".
//Estoy conforme de haber podido escribir las lineas de código que escribi, ya que nunca programe, al menos puedo ingresar los puntajes por la consola y eso es un gran paso para mí. Espero ir aprendiendo, porque la verdad me gusta mucho la carrera y estoy entusiasmada. Gracias por la paciencia!!

