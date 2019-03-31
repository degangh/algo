function SelectionSort(arr)
{
    for (let i = 0 ; i < arr.length; i++)
    {
        minIndex = i
        for (let m = i + 1; m < arr.length; m++)
        {
            if (arr[m] < arr[minIndex]) {minIndex = m}
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

arr = [9,8,7,6,5];

SelectionSort(arr);

console.log(arr)