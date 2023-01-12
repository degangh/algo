def selectionSort(nList):
    for i in (range(0, len(nList)-1)):
        print(i)
        if nList[i] != min(nList[i:]):
            minIndex = nList.index(min(nList[i:]))
            nList[i], nList[minIndex] = nList[minIndex], nList[i]
    
    return nList

numbers = [12,3,5,9,10]

print(selectionSort(numbers))
