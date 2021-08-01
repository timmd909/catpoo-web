'use strict';

import _ from 'lodash';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

import "./main.scss";

var newElement = document.createElement('div');
newElement.innerHTML = '<div class="container">Page loaded <i class="fa fa-check"></i></div>';
document.body.appendChild(newElement);

document.getElementById('loading-container').remove();
