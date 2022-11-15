const intersectOfArrays = function(nums1, nums2){
  if(nums1.length === 0 || nums2.length === 0) return null;

  let frequency1 = new Map();
  for (let n of nums1){
    frequency1.set(n, (frequency1.get(n) || 0) + 1)
  }

  let frequency2 = new Map();
  for (let n of nums2){
    frequency2.set(n, (frequency2.get(n) || 0) + 1)
  }

  let arr = [];
  for (let [key, value] of frequency1){
    if(frequency2.has(key)) {
      for (let i = 0; i < Math.min(frequency1.get(key), frequency2.get(key)); i++) {
        arr.push(key)
      }
    }
  }
  return arr
}

console.log(intersectOfArrays([1,2,2,1], [2,2]));
console.log(intersectOfArrays([4,9,5], [9,4,9,8,4]));
console.log(intersectOfArrays([1,2,2,1], [2]));
