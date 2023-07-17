unction threeSum(arr, target) {
// write your code here
	 arr.sort((a, b) => {
          return a - b;
        });

        let closestSum = arr[0] + arr[1] + arr[2];

        //Start from i = 1 cause first three sums are already taken care of
        for (let i = 1; i < arr.length - 2; i++) {
          let j = i + 1;
          let k = arr.length - 1;
        
          //Using two Pointers approach 
          while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];

			//Numbers can be negative so use abs to get the closest number
            if (Math.abs(closestSum - target) > Math.abs(sum - target)) {
              closestSum = sum;
            }

            if (sum < target) {
              j++;
            } else {
              k--;
            }
          }
        }
	return closestSum;
}

module.exports = threeSum;
