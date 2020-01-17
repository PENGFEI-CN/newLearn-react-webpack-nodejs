var newname = "bob";
newname = 'pengfei';
var newarr = [1, 2];
var newarr2 = ['a', 2];
console.log(newarr);
var x;
(function (x) {
    x[x["a"] = 1] = "a";
    x[x["b"] = 2] = "b";
    x[x["c"] = 4] = "c";
})(x || (x = {}));
console.log(x);
