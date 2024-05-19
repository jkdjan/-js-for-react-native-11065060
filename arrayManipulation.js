function processArray(arr) {
    let processedArray = [];
        for (let num of arr) {
            if (num % 2 === 0) {
                processedArray.push(num ** 2); 
            } else {
                processedArray.push(num * 3);}
        }
        return processedArray;
    }
    
    
    let inputArray = [5, 10, 12, 18];
    let outputArray =
     processArray(inputArray);
    console.log(outputArray);