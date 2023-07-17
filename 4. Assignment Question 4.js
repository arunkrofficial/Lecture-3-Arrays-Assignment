function searchInsert(nums, target) {
    if (!Array.isArray(nums) || typeof target !== 'number') {
        throw new TypeError('Invalid input: nums must be an array and target must be a number.');
    }
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; 
      } else if (nums[mid] < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return left; 
}
  
 
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); 
  