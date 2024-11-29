const array = ['0', null, '', 0];

function isTruthy(value) {
  return Boolean(value); 
}

const hasTruthyValues = array.some(isTruthy);

console.log(hasTruthyValues); 
