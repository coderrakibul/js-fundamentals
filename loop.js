

//while loop

var play = 0;

while(play < 7){
    console.log("khela chalu");
    play++;
    console.log(play);
}

var i = 0;

while (i < 100){
    console.log(i);
    console.log("start");
    i++;
}


var run = 0;

while(run < 5){
    console.log(run);
    console.log("running");
    run++;
}

var number = 1;

while(number <= 10){
    console.log(number);
    number++;
}


// odd number
var num = 1;
while (num <= 20){
    console.log(num);
    num = num + 2;
}

// even number
var digit = 2;
while (digit <= 20){
    console.log(digit);
    digit = digit + 2;
}

// for loop
for(var number = 0; number < 10; number++){
    console.log(number);
}

//odd number
for (var number = 1; number < 10; number = number + 2){
    console.log(number);
}

// even number
for(var number = 2; number <10; number = number + 2){
    console.log(number);
}

//appropiate
for(var i = 0; i < 10; i = i+1){
    console.log(i);
}

//appropiate
for(var i = 0; i < 10; i++){
    console.log(i);
}

//odd number
for(var i = 1; i < 10; i+= 2){
    console.log(i);
}

// array te loop
var number = [45, 54, 85, 84, 68, 62, 89];
for (var i = 0; i < 7; i++){
    var element = number[i];
    console.log(element);
}

var digit = [65, 54, 85, 62, 36, 12, 15, 75, 67];
for ( var i =0; i< 9; i++){
    var position = digit[i];
    console.log(position);
}

var number = [12, 13, 14, 54, 54, 45, 74, 32, 23, 42, 15, 47, 36];
for (var i =0; i < number.length; i++){
    var element = number[i];
    console.log(element);
}