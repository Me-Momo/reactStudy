import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

//  TestUtils.renderIntoDocument 负责渲染任意的JSX
const button = TestUtils.renderIntoDocument(
    <button
        onClick = {e => e.target.innerHTML="hello"}>
        Click Here!
    </button>
);

module.exports = button;