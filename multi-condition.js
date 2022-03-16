var gotJob = true;
var salary = 25000;
var flat = false;

// 2 ta shortoi puron korte hobe
if (gotJob == true && salary > 20000){
    console.log("Yes! I am ready");
}
else{
    console.log("I am not ready");
}


// 3 ta shortoi opuron korte hobe
if(gotJob == true && salary > 30000 && flat == true){
    console.log("Allow");
}
else{
    console.log("Not Allow");
}

// jekono 1 ta shorto pusron korlei hobe
if(gotJob == true || salary > 30000 || flat == true){
    console.log("Allow");
}
else{
    console.log("Not Allow");
}

// complex condition
var job = false;
var salary = false;
var house = true;
if((job == true && salary == true ) || house == true){
    console.log("Hurrah!!");
}
else{
    console.log("bad luck");
}
