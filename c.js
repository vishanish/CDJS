var a = ["a", "b", "c", "d", "e"];

function reverse(arr){
var i = 0;
while (i < arr.length/2){
    var temp = arr[i];
    arr[i] = arr[(arr.length-1) -i];
    arr[(arr.length-1) -i] = temp;
    i++;
}
return arr;
}
 var b = reverse(a);
 console.log(b);
