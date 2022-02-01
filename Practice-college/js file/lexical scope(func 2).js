function outer(){
    let movie = 'Hulk';
    function inner(){
        let movie = 'Kabadi';       //Uncommet and see the result--> This gonna be print
        console.log(movie.toUpperCase());
    }
    inner();
}
outer();


/* When we have function inside a function then the function first use the local variable.
   If if doesn't contain local variables the its use the parent variables.
   for e.g. above if we uncommet the variable inside the inner function take 'kabbadi'.
*/