// Q1)create a system to calculate popcorn prices based {on the size customer asked.

let popSize = "XL";
if(popSize == "XL"){
    console.log(`Price is Rs. 250`);
}
else if(popSize == "L"){
    console.log(`Price is Rs. 200`);
}
else if(popSize == "M"){
    console.log(`Price is Rs. 100`);
}
else{
    console.log(`Price is Rs. 50`)
}

// Q2)A "Good string" is a string that starts with the letter 'a' and has a length>3. WAP to find the given string is good or not
let str = "magar";
if(str[0]==='a' && str.length>3){
    console.log("It is a Good String.");
}else{
    console.log("It is not a Good String.");
}


// Switch Statement
let color = "green";
switch (color) {
    case "red":
        console.log("Stop!")
        break;
    case "yellow":
        console.log("slow down!")
        break;
    case "green":
        console.log("Go!")
        break;
    default:
        console.log("Light is damage!")
}

// Q)Use switch statement to print the day in week.
let day = 0;
switch (day) {
    case 1:
        console.log("Monday!")
        break;
    case 2:
        console.log("Tuesday!")
        break;
    case 3:
        console.log("Wednesday!")
        break;
    case 4:
        console.log("Thursday!")
        break;
    case 5:
        console.log("Friday!")
        break;
    case 6:
        console.log("Saturday!")
        break;
    case 7:
        console.log("Sunday!")
        break;
    default:
        console.log("Invalid Number!");
}