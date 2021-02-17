import {Punto} from "./punto"


// console.log(punto1.toString());

// console.log(punto1.distanciaAlOrigen());

// console.log(punto1.calcularDistancia(punto2));

// console.log(punto1.calcularCuadrante());

let punto1: Punto = new Punto(5,-5);

let punto2:Punto=new Punto(100,200);

let punto3:Punto=new Punto(5,5); 
let punto4:Punto=new Punto(15,5); 

let puntos: Punto[] = [punto2, punto3, punto4];

console.log(punto1.calcularMasCercano(puntos));
