// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

var binarySearch = function(nums, target) {
    var mid;
    var left =0;
    var right = nums.length-1;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(nums[mid]==target) return mid;
        target<nums[mid] ? right = mid-1 : left = mid+1;
    }
    return -1;
};

console.log(binarySearch([-1,0,3,5,9,12],9))