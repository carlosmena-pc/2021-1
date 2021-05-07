let number = prompt("Enter a Number")
let reverseNumber = ""

reverseNumber = number.split("").reverse()

if (reverseNumber[reverseNumber.length - 1] == "-"){
    reverseNumber.pop();
    reverseNumber.unshift("-");
}

reverseNumber = reverseNumber.join("")

let p = document.getElementsByTagName("p")[0]

p.innerText = "Reversed number: " + Number(reverseNumber)

