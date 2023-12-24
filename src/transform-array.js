const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next')
          res.pop();
        break;
      case '--double-next':
        if (i < arr.length - 1)
          res.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next')
          res.push(arr[i - 1]);
        break;
      default:
        res.push(arr[i]);
    }
  }

  return res;
}

module.exports = {
  transform
};
