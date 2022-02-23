console.log("Error Handling & try catch");

try {
    console.log('No error has been occured..');

    functionAnish();                                        //Comment and see the magic
    
} catch (error) {
    console.log("Error has been occured..");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
} finally{                                                          // No matter if error occured or not this will be executed
    console.log('Final code has been executed..')
}