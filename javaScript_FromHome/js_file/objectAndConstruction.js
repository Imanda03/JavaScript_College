//Object literal for creating object
let car = {
    name : 'Maruti 800',
    topSpeed : 80,
    run:function(){
        console.log('Car is rinning');
    }

}

//Creating constructors for cars
function GeneralCar(givenName,speed){
    this.name = givenName;
    this.topSpeed = speed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.speed} than Mercedes`);
    }
}
    car1 = new GeneralCar('Nissan',180);
    car2 = new GeneralCar('Marurus Alto',80);
    car3 = new GeneralCar('Mercedes',200);
    console.log(car1,car2,car3);