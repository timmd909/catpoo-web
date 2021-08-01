'use strict';

import _ from 'lodash';
import "./main.scss";

var newElement = document.createElement('div');
newElement.innerHTML = '<div class="container">Page loaded</div>';
document.body.appendChild(newElement);
