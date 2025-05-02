




function sumRange(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    const count = max - min + 1;
    return (count * (min + max)) / 2;
  }

console.log(sumRange(1, 5));

