function plusOne(digits) {
    return digits.reduceRight((carry, digit) => {
        if (digit === 9) {
            carry.unshift(0);
        } else {
            carry.unshift(digit + 1);
            return carry;
        }
    },
     [1]).join('').replace(/^0+/, '').split('').map(Number);
}
  

  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result);
  