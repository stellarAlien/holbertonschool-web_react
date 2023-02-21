import { Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
// https://immutable-js.com/docs/v4.2.4/Map/#:~:text=%7B%0A%20%20map.-,set,-(%27a%27

export { map, map2 };
