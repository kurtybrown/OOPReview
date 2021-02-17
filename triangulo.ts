import {Punto} from "./punto"

export class Triangulo
{
    private v1: Punto;
    private v2: Punto;
    private v3: Punto;
    constructor(v1:Punto,v2:Punto,v3:Punto)
    {
        this.v1=v1;
        this.v2=v2;
        this.v3=v3;
    }

    public calcularLogitudLados():number[]
    {
        let resultado:number[] = [];

        resultado.push(this.v1.calcularDistancia(this.v2));

        resultado.push(this.v2.calcularDistancia(this.v3))

        resultado.push(this.v3.calcularDistancia(this.v1))

        return resultado;
    }
}

let triangulo1: Triangulo = new Triangulo( new Punto(1,0), new Punto (5,2), new Punto(1,3));

console.log(triangulo1.calcularLogitudLados());