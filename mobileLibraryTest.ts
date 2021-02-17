import {Mobile} from "./mobile";
import {MobileLibrary} from "./mobileLibrary";


let mobile1:Mobile = new Mobile ("Nokia3210", "3210", "Nokia", "big", "gray", true, 2, 500);

let mobile2:Mobile = new Mobile ("iPhone3G", "3G", "Apple", "small", "black", false, 3, 1000);

let mobile3:Mobile = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", "medium", "white", false, 1, 899 );

let mobile4:Mobile = new Mobile ("Pocophone", "Pocophone", "Xiaomi", "medium", "red", true, 3, 400 );
 

let mobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];

let mobiles2: Mobile[] = [mobile1, mobile4];

let libreria1: MobileLibrary = new MobileLibrary("Espada", "Al lado de casa", mobiles);

libreria1.totalPriceCalculation(mobiles);

libreria1.setLocation("Ahí");
libreria1.setMobile(mobiles2);
libreria1.setName("Cayo Máximo");
libreria1.setTotalPrice(5000);

console.log(libreria1.getLocation());
console.log(libreria1.getMobiles());
console.log(libreria1.getName());
console.log(libreria1.getTotalPrice());