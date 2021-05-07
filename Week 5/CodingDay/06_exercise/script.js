/* I have used Node.js to run the code */

let numDays = [1,5,3,6,7]
let textDays = []


function weekNumbersToWords(numericDays) {
    numericDays.forEach( function(value){
        switch(value){
            case 1:
                textDays.push("Monday");
                break;
             case 2:
                    textDays.push("Tuesday");
                    break;
                    case 3:
                textDays.push("Wednesday");
                break;
                case 4:
                textDays.push("Thursday");
                break;
                case 5:
                textDays.push("Friday");
                break;
                
                case 6:
                textDays.push("Saturday");
                break;
                case 7:
                textDays.push("Sunday");
                break;


        }
    })
}

weekNumbersToWords(numDays);
console.log(textDays);