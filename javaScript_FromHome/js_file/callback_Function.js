// Callback function mean to call the function inside the function like in lineNu. 9

//Pretend that this response coming from server
const students = [
    {name :'anish', subject : 'Java' },
    {name : 'niraj', subject : 'JavaScript'}
]

function enrollStudents(student,callback){
        setTimeout(function(){
                students.push(student);
                console.log('students has been enrolled.');
                callback();
        },3000);
}
function getStudents(){
    setTimeout(function(){
        let str = '';
        students.forEach(function(student){
            str += `<li>${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;    
        console.log('students have been fetched.');
},1000);
}

let newStudent = {name : 'nischal', subject : 'math'}
enrollStudents(newStudent,getStudents);
// getStudents(newStudent);