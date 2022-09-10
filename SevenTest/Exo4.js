//Put in num the number you want 
let num = 529;
let binary = (num % 2).toString();
var count = 0;
var array = []; 
var maxarray = 0;

for (; num > 1; ) {
    num = parseInt(num / 2);
    binary =  (num % 2) + (binary);
}
var nbs = binary.split("")
for (let i=0; i<nbs.length; i++){
    if (parseInt(nbs[i]) === 0){
        count++
    }
    if (parseInt(nbs[i+1]) === 1){
        array.push(count);
        count = 0;
    }
}
for (let j=0; j < array.length; j++){
    for (let u=0; u <array.length ; u++){
        if (array[j] > array[u]){
            maxarray = array[j]
        }
        else if (array[j] < array[u]){
            maxarray = array[u]
        }
    }
}
if (parseInt(nbs[nbs.length - 1]) === 0){
    console.log("0 while there no 0 located between two values of 1")
}
else {
    console.log(binary);
    console.log(maxarray);
}
