import { Mobile } from "./mobile";


export class MobileLibrary
{
    private name:string;
    private location:string;
    private mobiles: Mobile[];
    private totalPrice:number;

    constructor(name:string, location:string, mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles=mobiles;
    }

    public getName():string
    {
        return this.name;
    }
    public setName(name:string)
    {
        this.name = name;
    }

    public getLocation():string
    {
        return this.location;
    }
    public setLocation(location:string)
    {
        this.location = location;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }
    public setMobile(mobiles:Mobile[])
    {
        this.mobiles = mobiles;
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }
    public setTotalPrice(totalPrice:number)
    {
        this.totalPrice = totalPrice;
    }

    public totalPriceCalculation(mobiles:Mobile[])
    {
        this.totalPrice=0;
        
        for(let i=0; i<mobiles.length; i++)
        {
            this.totalPrice += mobiles[i].getPrice();
        }

        console.log(this.totalPrice);
    }
}
