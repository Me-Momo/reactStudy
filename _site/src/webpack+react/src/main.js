const React = require('react');
const ReactDom = require('react-dom');
const List = require('./todo-list');

ReactDom.render(
    <List />, document.getElementById('root')
);
