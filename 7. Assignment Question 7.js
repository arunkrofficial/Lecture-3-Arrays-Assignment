function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    let prev = lower - 1;
  
    for (let i = 0; i <= nums.length; i++) {
      let curr = (i < nums.length) ? nums[i] : upper + 1;
  
      if (curr - prev >= 2) {
        result.push(getRange(prev + 1, curr - 1));
      }
  
      prev = curr;
    }
  
    return result;
  }
  

  function getRange(start, end) {
    return (start === end) ? `${start}` : `${start}->${end}`;
  }
  
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  console.log(result);

  