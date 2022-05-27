console.log("Welcome to the password validator tool!")

const readline = require('readline');

// start boiler plate code 
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//end boiler plate code 


reader.question("Type the password that you want validated: ", function(input){
  console.log('The input was: ' + input)
	 
  if (input.length >= 10) {
    console.log("Good Password!") 
    }  else{
        console.log("Your character needs to be atleast 10 characters long!")
      }

    reader.close()
    })

    