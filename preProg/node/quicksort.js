function partition(items, left, right) {

        let pivot = items[right];
        let i = (left - 1); 

        for (let j = left; j <= right - 1; j++)
        {
            if (items[j] < pivot)
            {
                i++; 
                let aux = items[i]
                items[i] = items[j]
                items[j] = aux
            }
        }
        let aux = items[i + 1]
        items[i + 1] = items[right]
        items[right] = aux
        return (i + 1);

}

function quickSort(items, left, right) {

    if (!Array.isArray(items)) {
        return "A entrada precisa ser um array"
    }

    let index;

    if (items.length > 1) {
        if (left < right){
            index = partition(items, left, right);
            quickSort(items, left, index - 1);
            quickSort(items, index + 1, right);
        }
    }

    return items;
}

