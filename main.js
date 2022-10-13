var obj = {
    num : 2
}
var addToThis = function(a,b){
     return this.num +a +b;
}

var arr  =[5,6]
var a = addToThis.apply(obj ,arr);
// var a = addToThis.call(obj,5,6);
console.log(a);

var bound = addToThis.bind(obj);

var b = bound(5,6);

console.log(b);
