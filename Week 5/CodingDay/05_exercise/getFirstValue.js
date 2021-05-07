/* I have used Node.js to run the code */

let array = ["hi", "Carlos", "zap", "actually", "Tuesday"]

function getFirstValue(strings) {
    strings.sort();
    return strings[strings.length - 1]

}

console.log(getFirstValue(array));
