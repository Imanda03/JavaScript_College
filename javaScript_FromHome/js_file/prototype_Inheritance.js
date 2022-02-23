// creating protoType (inside prototype we create slogan and changeName)
const proto = {
    slogan:function(){
        return `this is the best company`
    },
    changeName:function(newName){
        this.name = newName;
    }
}

// creating object

// const anish = Object.create(proto);
// anish.name = 'Anish';
// anish.role = 'Programmer';
// anish.changeName('Imanda')
// console.log(anish);


// Here we inherit the property of proto from above
const anish = Object.create(proto,{
    name: {value: 'Anish',writable:true},        // writeable property able to write or change name
    role: {value: 'programmer'}
});
anish.changeName("Anish1");                     //change the name
console.log(anish);


//Employee construction
function Employee (name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//for slogan
Employee.prototype.slogan = function(){         //Creating slogan function 
    return `This company is the best according to the ${this.name}`
}
let anishObj = new Employee('Anish',300000,25);
console.log(anishObj);
console.log(anishObj.slogan());

//programmer 
function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);             //Inherit the employee property
    this.language = language;
}
//Inherit the property
programmer.prototype = Object.create(Employee.prototype);

//Manually set the construction
programmer.prototype.constructor = programmer;

let rohan = new programmer('Rohan',20000,0,'JavaScript');
console.log(rohan);

