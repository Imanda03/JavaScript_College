console.log("String Templates");
/* Stripng Template Literals
    Template literals are the strings that allow embedded expression, which will beevaluated and
    returned into a resulting string.
*/
//Example

`The sum is ${4+3}`

let userName = "Anish Sharma";
`Welcome back, ${userName}`
`Game over ${userName.toUpperCase()}`;

let item = 'Noodles';
let price = 25;
let quantity = 4;
console.log(`You bought ${quantity} ${item}, total price : Rs. ${price*quantity}`)

const books = [
    {
        title : 'book1',
        authors : ["Niraj", "Saban"],
        rating : 3.5
    },
    {
        title : 'book2',
        authors : ["Sugam", "Anish"],
        rating : 3.85
    },
    {
        title : 'book3',
        authors : ["Nischal", "Bibek"],
        rating : 3.8
    },
    {
        title : 'book4',
        authors : ["Sam Lal", "Hari Lal"],
        rating : 3.2
    },
    {
        title : 'book5',
        authors : ["Simana", "Mandira"],
        rating : 3.4
    }
]

books.forEach((book)=>{
    console.log(`
    <ul>
        <li> title : ${book.title}</li>
        <li> authors : ${book.authors}</li>
        <li> rating : ${book.rating}</li>
    </ul>
    `)
})