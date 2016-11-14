import jsdom from 'jsdom';

global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

require('./action-spec.js');
require('./reducer-spec.js');

require('./components/item-form-spec.js');
require('./components/item-spec.js');
require('./components/item-list-spec.js');
