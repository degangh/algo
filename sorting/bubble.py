def bubbleSort(nList):
    if len(nList) <= 1:
        return nList
    for i in range(1, len(nList)):
        for j in range(0,len(nList) - 1):
            if (nList[j] > nList[j+1]):
                nList[j], nList[j+1] = nList[j+1],nList[j]
    
    return nList
  
numbers = [3, 8, 7, 2, 9,11]

print(bubbleSort(numbers))
