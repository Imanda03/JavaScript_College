console.log("Methods and Objects");

/* methods and objects
    we can add functionas properties in objects. We call them method
*/
const math = {
    add : function (a,b){
        return a+b;
    },
    sub : function (a,b){
        return a-b;
    },
    multiply : function (a,b){
        return a*b;
    },
    divide : function (a,b){
        return a/b;
    }
};
console.log(math.add(10,20));


