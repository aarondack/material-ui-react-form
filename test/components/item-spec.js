import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Item from '../../src/components/Item';

function setupComponent() {
  const props = {
    name: 'ShopKeep',
    description: 'We are the best',
    price: '1,000,000',
    date: '2016-11-20',
    taxable: true
  }
  const wrapper = shallow( <Item {...props} />)

  return {
    props,
    wrapper
  }
}

const { wrapper } = setupComponent();

test('It has a .item class name', t => {
  t.true(wrapper.hasClass('item'));
});

test('It renders the appropriate amount of elements', t => {
  t.is(wrapper.find('h2').length, 1);
  t.is(wrapper.find('h3').length, 1);
  t.is(wrapper.find('p').length, 2);
});
