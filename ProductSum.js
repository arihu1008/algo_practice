
let array = [1, [2, 3, [2]]]
function productSum(array, depth = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if (Array.isArray(elem)) {
      depth++
      sum += depth * productSum(elem, depth);
    } else {
      sum += elem;
    }
  }
  return sum;
}

console.log(productSum(array, depth = 1))
