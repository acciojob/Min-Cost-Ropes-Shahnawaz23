function mincost(arr)
{ 
//write your code here
// return the min cost
  if (arr.length <= 1) return 0;
 const minHeap = [...arr].sort((a, b) => a - b);

    let totalCost = 0;

    while (minHeap.length > 1) {
        const first = minHeap.shift();
        const second = minHeap.shift();

        const cost = first + second;
        totalCost += cost;

        // Insert the new combined rope back into the sorted heap
        let i = 0;
        while (i < minHeap.length && minHeap[i] < cost) i++;
        minHeap.splice(i, 0, cost);
    }

    return totalCost;
}

module.exports=mincost;
