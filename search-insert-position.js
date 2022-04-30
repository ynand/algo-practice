var searchInsert = function(nums, target) {
    var mid;
    var left =0;
    var right = nums.length-1;
    if(target<nums[0]){
        return left;
    }
    else if (target>nums[nums.length-1]){
        return right+1;
    }
    while(left<=right){
        mid = Math.floor((left+right)/2);
        
        if(nums[mid]<target && nums[mid]>target || nums[mid]==target){
            return mid;
        } 
        target<nums[mid] ? right = mid-1 : left = mid+1;
    }
    return left;
};

console.log(searchInsert([1,3,5,6],2))