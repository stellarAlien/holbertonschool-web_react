import getImmutableObject from './0-fromjs.js';

const myMap = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableMap = getImmutableObject(myMap);
console.log(immutableMap);
