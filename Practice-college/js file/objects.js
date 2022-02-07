

console.log('Objects ( Object literal)');

/* Objects are collection of properties.
   Properties are the key value pair
   Rather than acessing data using an index, we use custom keys
*/

const laptop = {
    brand: 'Microsoft',
    model: 'Surface Pro',
    price: 36693,
    dimensions: '292.00 x 200.00 x 8.50',
    weight: 768.0,
    color: 'Black'
};


//Acessing values or properties
const fitnessData = {
    totalSteps: 30765,
    totalMiles: 211.11,
    avgCalorieBurn: 5755,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}

fitnessData.totalSteps;
console.log(fitnessData.totalSteps);


const number = {
    100: 'Hundred',
    5: 'Five'
};
//  console.log(number.100);     --> This is wrong
console.log(number[100]);



// Updating and adding Properties
// here userReviews varibles use objects as a reference that why we are able to update and add properities
const userReviews = {};                     //Empty object
userReviews['nita32'] = 4.0;                //Adding properties and values
userReviews.sagar11 = 3.8                   //Updating properties snd values
userReviews.sagar11 = 4.5                   // Updating values
userReviews['nita32'] += 1                   // applying unary operator



//Nested array amd Objects
const student = {
    firstNmae: 'Prithivi',
    lastNmame: "Pun",
    strngths: ['Music', 'Art'],
    exams: {
        midterm: 60,
        final: 90
    }
};
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);
console.log(student.strngths[1])


const shoppingCart = [
    {
        product: 'Noodles',
        price: 25,
        quantity: 1
    },
    {
        product: 'HomeMade biscuits',
        price: 50,
        quantity: 10
    },
    {
        product: 'Dairy Milk',
        price: 150,
        quantity: 5
    }
]


const books = [
    {
        title : 'book1',
        aurthors : ["Niraj", "Saban"],
        rating : 3.5
    },
    {
        title : 'book2',
        aurthors : ["Sugam", "Anish"],
        rating : 3.85
    },
    {
        title : 'book3',
        aurthors : ["Nischal", "Bibek"],
        rating : 3.8
    },
    {
        title : 'book4',
        aurthors : ["Sam Lal", "Hari Lal"],
        rating : 3.2
    },
    {
        title : 'book5',
        aurthors : ["Simana", "Mandira"],
        rating : 3.4
    }
]

console.log( books.map((book)=>{                        // Here map() create array by calling the objects inside the function
    return book.title;
}));