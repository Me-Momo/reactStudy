import React from 'react';
import  { render } from 'react-dom';
import  List from './components/todo-list';

render(
    <List />, document.getElementById('root')
);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./components/todo-list', () => {
    const NextList = require('./components/todo-list').default;
        render(
            NextList,
            document.getElementById('root')
        );
  });
}
