let today = new Date();             //Give the time and date of today
console.log(today);

let otherDate = new Date('8-4-2003 04:54:08');          //Set the date
console.log(otherDate);

let other2Date = new Date('June-13 1946');              //Set the date
let a =other2Date.getDate();                        //Get the date of other2Date
a = other2Date.getDay();            //Get the day of other2Date
a = other2Date.getHours();          //Get the hours
a = other2Date.getMonth();          //Get the Month
                                    //we can anything date and time by using .get function.

other2Date.setDate(23);             //Set the date
other2Date.setHours(12);            //Set the Hours
other2Date.setMonth(6);             //Set the month

                                    //We xan set date and time by using .set function.