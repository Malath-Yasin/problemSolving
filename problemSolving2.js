//Ex 5:

//using for 
function power(arr){
    var newarr=[];
for(var i=0;i<arr.length;i++){
    var pow=Math.pow(arr[i],2)
    newarr.push(pow);
}
return newarr;
}
var array=[1,2,3];
console.log(power(array));

//using forEach
function power2(arr){
    var newarr=[];
arr.forEach((element)=>{
var pow=Math.pow(element,2);
newarr.push(pow);
});
return newarr;
}
var array=[1,2,3];
console.log(power2(array));

//using map 
function power3(arr){
var newarr=[];
arr.map((element)=>{
var pow=Math.pow(element,2);
newarr.push(pow);
});
return newarr;
}
var array=[1,2,3];
console.log(power3(array));


//EX 6:
function EvenOdd(arr){ 
    var newarr=[];
arr.map((element)=>{
if(element%2==0 ){
newarr.push("even");
}
else if(element%2!=0 &&!isNaN(element)){
    newarr.push("odd");
}
 else if(isNaN(element)){
    newarr.push("N/A");
}
});
return newarr;
}
var array=[1,2,3,"mm",55,55,2];
console.log(EvenOdd(array));

//Ex 7:
function fizzBuzz(arr){
    var newarr=[];
arr.map((element)=>{
if(element%3== 0  && element%5==0){
newarr.push("fizzBuzz");
}
else if(element%5==0){
newarr.push("buzz");
}
else if(element%3==0){
newarr.push("fizz");
}
else{
newarr.push(element);
}
});
return newarr;
}
var array=[1,5,15,6,4];
console.log(fizzBuzz(array));