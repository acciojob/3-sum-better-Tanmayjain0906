function threeSum(arr, target) {
    let findIndex;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] === target)
        {
            findIndex = i;
        }
    }
    arr.splice(findIndex+1);
    let ans = arr.reduce((h1, h2) => {
        return h1 + h2;
    })
    return ans;
}

module.exports = threeSum;
