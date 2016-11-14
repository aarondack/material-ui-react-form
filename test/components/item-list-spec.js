import React from 'react';
import test from 'ava';
import ShopList from '../../src/components/ShopList';
import Item from '../../src/components/Item';
import { shallow } from 'enzyme';

function setupComponent() {
  const props = {
    shopItems: [{
      name: 'ShopKeep',
      description: 'We are the best',
      price: '1,000,000',
      date: '2016-11-20',
      taxable: true
    }]
}
  const wrapper = shallow( <ShopList {...props} />)

  return {
    props,
    wrapper
  }
}

const { wrapper } = setupComponent();

test('It has a .list class name lead div', t => {
  t.true(wrapper.hasClass('list'));
});

test('It renders out one item component based on array length', t => {
  const item = wrapper.find(Item);
  t.is(item.length, 1);
})
