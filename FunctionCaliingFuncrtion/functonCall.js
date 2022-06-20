first = (call_second) =>{
    console.log("I am first");
    call_second();
}

second = () =>{
    console.log("I am second");
};

first(second);