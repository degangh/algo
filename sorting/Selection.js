
arr = require('../input').arr()


function SelectionSort(arr)
{
    var n = 0;
    for (let i = 0 ; i < arr.length; i++)
    {
        minIndex = i
        swapped = false
        for (let m = i + 1; m < arr.length; m++)
        {
            if (arr[m] < arr[minIndex]) 
            {
                minIndex = m
                swapped = true      
            }
            n++;
            console.log(i,n)
        }
        if (swapped)
        {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
        
    }

    return n
}

o = SelectionSort(arr);

console.log(arr , o)