function sum(arr) {
    if (!Array.isArray(arr)) {
        return "A entrada precisa ser um array"
    }

    //Value that will store the sum
    let sum = 0 
    for(let i = 0; i < arr.length; i++)
    {
        //Check if is a number
        if(isNaN(arr[i])) {
            return "A entrada precisa ser uma lista de numero"
        }

        sum += arr[i]
    }

    return sum
}

