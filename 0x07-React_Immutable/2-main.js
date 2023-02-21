import accessImmutableObject from './2-nested.js';

const object = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

const array = ['name', 'first'];

const value = accessImmutableObject(object, array);
console.log(value);
