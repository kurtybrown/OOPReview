import {Mobile} from "./mobile";

let mobile1:Mobile = new Mobile ("Nokia3210", "3210", "Nokia", "big", "gray", true, 2, 500);

let mobile2:Mobile = new Mobile ("iPhone3G", "3G", "Apple", "small", "black", false, 3, 1000);

let mobile3:Mobile = new Mobile ("Samsung Galaxy 10", "Galaxy 10", "Samsung", "medium", "white", false, 1, 899 );


let mobiles: Mobile[] = [mobile1, mobile2, mobile3];

// mobile2.is5G = true;

// mobile2.cameraNumber = 4;

// console.log(mobiles);

mobile2.setIs5G(true);
console.log(mobile2.getIs5G());

mobile2.setCameraNumber(4);
console.log(mobile2.getCameraNumber());

mobile1.impMobile();


