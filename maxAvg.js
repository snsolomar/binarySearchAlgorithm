var findMaxAverage = function(nums, k) {
    var findMaxAverage = function(nums, k) {

        let sum = 0;
    
        for (let i = 0; i < k; i++){ // i < k because that is the end of the subarray
            sum += nums[i];
        }
    
        let max = sum;
    
        for (let i = k; i < nums.length; i++){
            sum = sum - nums[i - k] + nums[i]
    
            if (sum > max){
                max = sum;
            }
        }
        let avg = max / k;
    
        return avg;
    }
}