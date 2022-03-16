var banana = 25;
var lichee = 20;
var toast = 11;
var balance = 30;

// akhane prothom shorto puron korbe karon prothom ta sotto
if (banana < balance){
    console.log("banana khabo");
}
else if (lichee < balance ){
    console.log("lichi khabo");
}
else if (toast < balance){
    console.log("toast khabo");
}
else {
    console.log("dur foyinni");
}

// akhane kono shortoi puron korbe na else er vetor jabe
var orange = 35;
var grapes = 40;
var jackfruit = 41;
var money = 30;

if (orange < money){
    console.log("komla khabo");
}
else if (grapes < money ){
    console.log("angur khabo");
}
else if (jackfruit < money){
    console.log("kathal khabo");
}
else {
    console.log("dur foyinni");
}

// nested if
var job = true;
var packet = false;
if (job == true){
    if(packet == true){
        console.log("This is good");
    }
    else{
        console.log("Not Good");
    }
}
