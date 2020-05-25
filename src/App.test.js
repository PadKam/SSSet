import React from 'react';
import ReactDOM from 'react-dom'
import AppCla, {TestApp} from "./App";

test('renders learn react link', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TestApp/>,div)
    ReactDOM.unmountComponentAtNode(div)
});

