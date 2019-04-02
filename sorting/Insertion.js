arr = require('../input').arr()

function InsertionSort(arr)
{
    var sorted = [arr[0]]

    for (var i = 1; i < arr.length ; i++)
    {
        console.log(sorted, arr)
        var flagIndex = -1
        for (var m = sorted.length; m > 0; m--)
        {
            
            if (sorted[m - 1] > arr[i]) 
            {
                flagIndex = m -1
            }
            
        }
        if (flagIndex > -1) sorted.splice(flagIndex , 0, arr[i])
        else sorted.splice(sorted.length,0,arr[i])
    }


    return sorted
}

console.log(InsertionSort(arr))