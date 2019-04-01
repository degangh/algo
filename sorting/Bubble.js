

arr = require('../input').arr()

function bubbleSort(arr)
{
    var swapped 
    var temp
    var n = 0;
    do {
        swapped = false
        for (let i = 0; i < arr.length ; i++)
        {
            if (arr[i] > arr[i+1]) 
            {
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp;
                swapped = true
            }
            n++
        }
    } while(swapped)

    return n;
}


o = bubbleSort(arr)

console.log(arr, o)
