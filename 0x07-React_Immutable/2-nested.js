import { Map } from 'immutable';

function accessImmutableObject(object, array) {
  if (!array.length) { return undefined; }
  const immutableObject = Map(object);
  const value = immutableObject.getIn(array);
  return value !== undefined ? value : undefined;
}
export default accessImmutableObject;
