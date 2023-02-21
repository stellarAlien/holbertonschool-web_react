import { concatElements, mergeElements } from './5-merge.js';

const page1 = ['a', 'b', 'c'];
const page2 = ['d', 'e', 'f'];
console.log(concatElements(page1, page2));

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };
console.log(mergeElements(obj1, obj2));
