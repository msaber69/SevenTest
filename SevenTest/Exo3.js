//The array used for testing the function 
//Put in the array the values you want 

const array = [1, 2, 2, 1, 5, 3, 3, 2, 9, 9, 9, 0, 2, 2, 0]

for (let i=0; i < array.length; i++){
    var count = 0;
    for (let j=0; j < array.length; j++){
        if (array[i] === array[j]){
            count++
        }
    }
    console.log(count)
    if (count === 1) {
        console.log("The unique value in the given array is : " +array[i]+ " and its index in the array is : " +i)
    }
}