// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  const obj = {name: "Sam", address: "12 Broadway"};
  return Object.assign({}, obj, {[key]:value});
}
