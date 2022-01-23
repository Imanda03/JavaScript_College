class Employee {
    constructor(name,experience,division){
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan(){
        return `I am ${this.name} and i like this company`;
    }
//     joiningYear(){
//         return 2022 - this.experience;
//     }
// static add(a,b){
//     return a+b;
// }
}
// anish = new Employee('Anish',25,'A rank');
// console.log(anish);
// console.log(anish.joiningYear());
// console.log(anish.add(25,56));

class Programmer extends Employee{
    constructor(name,experience,divison,language,github){
        super(name,experience,divison);
        this.language = language;
    }
    static mul(a,b){
        return a*b;
    }
}

rohan = new Programmer('Rohan',3,'lays','JavaScript','Rohan24');
console.log(rohan);
console.log(Programmer.mul(6,6))