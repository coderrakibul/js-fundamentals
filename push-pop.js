//array push for string to last
var products = ["onion", "potato", "tomato"];
products.push("banana");
products.push("sweet");
console.log(products);

//array push for number to last
var marks = [87, 79, 80, 91,];
marks.push(85);
marks.push(60);
console.log(marks);

//array pop for string to last
products.pop();
products.pop();
console.log(products);

//array pop for number to last
marks.pop();
marks.pop();
marks.pop();
marks.pop();
console.log(marks);

//add to first
var subject = ["english", "math"];
subject.unshift("bangla");
console.log(subject);

//remove from first
var name = ["rahim", "karim", "salam"];
name.shift();
console.log(name);

//array lastitem remove from last
var number = [17, 18, 19, 20];
var lastItem = number.pop();
console.log(number);
console.log(lastItem);

//array firstitem remove from first
var goods = ["onion", "banana", "ginger"];
var firstItem = goods.shift();
console.log(goods);
console.log(firstItem);