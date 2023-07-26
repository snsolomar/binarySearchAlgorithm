var findMaxAverage = function(nums, k) {
    if (nums.length == 1) {
        return nums[0];
    }

    let sum = 0;
    let max = 0; 
    
    for (let i = 0; i < k; i++){
        sum += nums[i];
    }

    max = sum / k;
    for (let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i-k]
        max = Math.max(max, sum / k)
    }
    return max;
};