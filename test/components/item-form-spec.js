import React from 'react';
import test from 'ava';
import { shallow, mount } from 'enzyme';
import ItemForm from '../../src/components/ItemForm';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

function setupComponent() {
  const mountWithContext = (node) => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  });

  const wrapper = mount(
      <ItemForm addItem={() => {}} />, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });

  return { wrapper }
}

const { wrapper } = setupComponent();

test('It has a .stickyForm class name lead div', t => {
  const wrapper = shallow(<ItemForm addItem={() => {}}/>);
  t.true(wrapper.hasClass('stickyForm'));
});

test('It sets the initialState correctly', t => {
  t.is(wrapper.state().name, '');
  t.is(wrapper.state().description, '');
  t.is(wrapper.state().price, '');
  t.is(wrapper.state().date, '');
});

test('It should simulate checkbox click', t => {
  wrapper.find('#taxable').simulate('click');
  t.is(wrapper.state().taxable, true);
});

test('It changes state with appropriate input (name)', t => {
  wrapper.find('#name').simulate('change', { target: { id: 'name', value: 'Shopkeep' }});
  t.is(wrapper.state().name, 'Shopkeep');
});

test('It changes state with appropriate input (description)', t => {
  wrapper.find('#description').simulate('change', { target: { id: 'description', value: 'Wahoo' }});
  t.is(wrapper.state().description, 'Wahoo');
});

test('It changes state with appropriate input (date)', t => {
  wrapper.find('#date').simulate('change', { target: { id: 'date', value: '2016-12-25' }});
  t.is(wrapper.state().date, '2016-12-25');
});
