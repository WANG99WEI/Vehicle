class Vehicle {
    carBrand="brand";
    carColor="color";
    carSpeed=0;
    run=function(){
        console.log("汽车奔跑速度为："+this.carSpeed);
    };

    constructor(brand, color) {
        this.carBrand = brand,
        this.carColor = color;
    }
}
  
Object.defineProperty(Vehicle, "carBrand", {
    writable: false,
    configurable: false
} );

var count = 0;
function getVehicle(brand,color){
    if(count<11){
        return new Vehicle(brand,color);
        count++;
    }else{
        console.log("最多只能创建11个对象！");
    }
}
var benz = getVehicle("benz","black");
console.log(benz.carBrand);
benz.run();
benz.carSpeed = 100;
benz.run();



