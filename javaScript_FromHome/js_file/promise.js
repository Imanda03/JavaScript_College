console.log('Weolcome to promise()');

// function func1() {
//     return new Promise(function (resolve, reject) {     //Returning promise 
//         setTimeout(() => {                         //either it will be reject or resolve
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been redolved');
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been redolved');
//                 reject('Sorrry not fulfilled');
//             }

//         })

//     }, 2000)
// }
// func1().then(function(){                          //If function resolve then this will be run
//     console.log('Me: Thanks for resloving')
// }).catch(function(){
//     console.log("Me: Its has been reject")    //If ffunction reject then this will be run
// });



//Pretend that this response coming from server
const students = [
    { name: 'anish', subject: 'Java' },
    { name: 'niraj', subject: 'JavaScript' }
]

function enrollStudents(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log('students has been enrolled.');
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }

        }, 3000)

    })
}
function getStudents() {
    setTimeout(function () {
        let str = '';
        students.forEach(function (student) {
            str += `<li>${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('students have been fetched.');
    }, 1000);
}

let newStudent = { name: 'nischal', subject: 'math' }
enrollStudents(newStudent).then(function () {  //Instead of function we can direct write the getStudents functions
    getStudents();
}).catch(function () {
    console.log('Some error has been occured');
})

// getStudents(newStudent);

// in then function -> resolve will be run
// In the function --> reject will be run