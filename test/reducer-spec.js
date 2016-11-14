import test from 'ava';
import Shop from '../src/reducers';
import { addItemToStore } from '../src/actions';

const item = {
  name: 'Store',
  description: 'We are the best',
  price: '1,000,000',
  date: '2016-11-20',
  taxable: true
}

test('The initial state is set when the state is undefined', t => {
  t.deepEqual(
    Shop(undefined, {}),
    { items: [] }
  );
});

test('It allows an item to be added to the store', t => {
  const previousState = { items: [] }
  const futureState = Shop(previousState, addItemToStore(item));
  t.deepEqual(futureState, {
    items: [{
      name: 'ShopKeep',
      description: 'We are the best',
      price: '1,000,000',
      date: '2016-11-20',
      taxable: true
    }]
  })
});
