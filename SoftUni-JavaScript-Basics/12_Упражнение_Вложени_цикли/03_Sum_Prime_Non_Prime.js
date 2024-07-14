function primeNonPrime (input) {
    let command = input[0];
    let i = 1;
    let sumOfPrime = 0;
    let sumOfNonPrime = 0;

    while (command !== `stop`) {
        let number = Number(command)
        if (number < 0) {
            console.log (`Number is negative.`)
        } else if (number === 0 || number === 1){
            sumOfNonPrime += number
        } else {
                let isNonPrime = false;  
               for (let col = 2; col < number; col += 1 ) {
                if (number % col === 0) {
                    isNonPrime = true;
                    break;
                }
               }
               if (isNonPrime === true) {
                sumOfNonPrime += number
            } else {
                sumOfPrime += number; 
            
            }
            
            }
            command = input[i]
            i += 1
        
        }
    
        console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
        console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`)
    }
primeNonPrime (["3",
"9",
"0",
"7",
"19",
"4",
"stop"])


