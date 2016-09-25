import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import router from './router';

render(router, document.getElementById('app'));