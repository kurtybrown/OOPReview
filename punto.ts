export class Punto
{
    private x:number;
    private y:number;

    constructor(x:number, y:number)
    {
        this.x=x;
        this.y=y;
    }

    public toString():string
    {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    }

    public getX():number
    {
        return this.x;
    }

    public setX(x:number)
    {
        this.x = x;
    }
    public getY():number
    {
        return this.y;
    }

    public setY(y:number)
    {
        this.y = y;
    }

    public distanciaAlOrigen():number
    {
        let distanciaOrigen = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

        return distanciaOrigen;
    }

    public calcularDistancia(otroPunto:Punto):number
    {
        let distanciaOtro = Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));

        return distanciaOtro;
    }

    public calcularCuadrante():number
    {
        if(this.x == 0 || this.y == 0)
        {
            return 0;
        }

        if(this.x > 0 && this.y > 0)
        {
            return 1;
        }

        if(this.x < 0 && this.y > 0)
        {
            return 2;
        }

        if(this.x < 0 && this.y < 0)
        {
            return 3;
        }

        if(this.x > 0 && this.y < 0)
        {
            return 4;
        }
    }
    public calcularMasCercano(puntos:Punto[]):Punto
    {
        let masCercano:Punto

        let reyDelMomento:number = this.calcularDistancia(puntos[0]); 
        
        for(let i=1; i<puntos.length; i++)
        {
            
            
            if (this.calcularDistancia(puntos[i])<reyDelMomento)
            {
                reyDelMomento = this.calcularDistancia(puntos[i]);

                masCercano = puntos[i];
            }
        }

        return masCercano;
    }
}

