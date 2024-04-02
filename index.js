module.exports = function flattenlev(arr, prev) {
  let ret = prev || [];
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      flattenlev(val, acc);
    } else {
      acc.push(val);
    }
    return acc;
  }, ret);
}
