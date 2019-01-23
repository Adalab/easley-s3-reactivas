import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import { HashRouter } from 'react-router-dom';
import App from './components/App.js';


ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>, document.getElementById('root'));
