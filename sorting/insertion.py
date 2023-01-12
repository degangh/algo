def insertionSort(nList):
    for right in range(1, len(nList)):
        target = nList[right]
        for left in range(0, right):
            if target <= nList[left] : 
                nList[left+1:right+1] = nList[left:right]
                print(nList)
                nList[left] = target
                break
            print(nList)
                
    return nList
numbers = [3,1,2,5,9,0]

print(insertionSort(numbers))
