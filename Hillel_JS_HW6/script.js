const obj = {
  name: 'Alex',
  age: 33,
  adress: { country: 'UA', city: 'Dnipro' },
};

function copy(object) {
  const clone = Object.assign({}, object);

  for (const key in object) {
    if (typeof object[key] === 'object') {
      clone[key] = copy(object[key]);
    }
  }
  
  return clone;
}

const objCopy = copy(obj);
console.log(objCopy === obj);
console.log(objCopy.adress === obj.adress);
