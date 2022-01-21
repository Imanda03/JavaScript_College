//object literal
let obj = {
    name : 'Anish',
    surNmae : 'Sharma',
    address : 'Nepal'
}
//always make a prototype of construction
//Its is mistake to make prototype of global variable
function Obj(givenName){
    this.name = givenName;
}
Obj.prototype.getNmae = function(){
    return this.name;
}
Obj.prototype.setName = function(newName){
    this.name = newName;
}
let obj1 = new Obj('Roshan Das');