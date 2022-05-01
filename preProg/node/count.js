function count(values, cut) {
    if (!Array.isArray(values)) {
        return "A entrada precisa ser um array"
    }

    //The cut value must be a number
    if (isNaN(cut)) {
        return "A entrada precisa ser um numero"
    }

    //The counter variable counts the number of values below the count number
    let counter = 0
    for(let i = 0; i < values.length; i++) {
        if (values[i] < cut) {
            counter++
        }
    }

    return counter
}

export default count