var age=22;
if(age > 18)
{
    console.log("you are eligible to vote");
}
else{
    console.log("ypu are not eligible to vote yet");
}

var weatherCondition="rainy";
if(weatherCondition==="rainy"){
    console.log("It's pouring outside")
}
else{
    console.log("not raining");
}


var marks=76;
var grade;
if(marks>=90){
    grade="A+";
}else if(marks>=81){
    grade="A"
}
else if(marks>=71){
    grade="B+";
}else if(marks>=61){
    grade="B"
}
else if(marks>=51){
    grade="C";
}
else if(marks>=40){
    grade="D";
}
else if(marks>=35){
    grade="fail"
}
console.log("the grade is:"+grade);