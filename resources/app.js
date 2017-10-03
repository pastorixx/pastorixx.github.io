import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import content from './reducers/reducer';
import LayoutComponent from './components/layouts/main';
import 'bootstrap-sass';
import './styles/sass/app.scss';
import './styles/css/custom.css';

const store = createStore(content);

render(
    <Provider store={store}>
        <LayoutComponent/>
    </Provider>,
    document.getElementById('app')
);