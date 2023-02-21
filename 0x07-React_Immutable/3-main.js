import { getListObject, addElementToList } from './3-list.js';

const myArray = [1, 2, 3, 4, 5];
const myList = getListObject(myArray);
console.log(myList);

const updatedList = addElementToList(myList, 6);
console.log(updatedList);
