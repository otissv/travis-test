exports.tenItems = [...Array(10).keys()];

exports.printItems = function printTenItems(items = []) {
  items.forEach((_, i) => {
    console.log(i + 1);
  });
};
