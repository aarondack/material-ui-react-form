import test from 'ava';
import { addItemToStore } from '../src/actions';

const item = {
  name: 'Store',
  description: 'We are the best',
  price: '1,000,000',
  date: '2016-11-20',
  taxable: true
}

test('When action is called it returns with a payload', t => {
  t.deepEqual(
    addItemToStore(item),
    { type: 'ADD_ITEM_TO_STORE', item}
  );
});

test('Undefined payload (default)', t => {
  t.deepEqual(
    addItemToStore(),
    { type: 'ADD_ITEM_TO_STORE', item: undefined }
  );
});
