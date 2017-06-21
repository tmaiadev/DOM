'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * DOM
                                                                                                                                                                                                                                                                               * @param {string} tagName 
                                                                                                                                                                                                                                                                               * @param {object|string} [attributes] 
                                                                                                                                                                                                                                                                               * @param {string|number|HTMLElement|[string|number|HTMLElement]} [children]
                                                                                                                                                                                                                                                                               * @return {HTMLElement}
                                                                                                                                                                                                                                                                               */


exports.default = function (tagName, attributes, children) {

    if (typeof tagName !== 'string') {
        throw 'TagName has unexpected type. It expects string.';
    }

    // Create element
    var el = document.createElement(tagName);

    if (attributes) {
        // If attributes is string, 
        // then attributes is class
        if (typeof attributes === 'string') {
            el.setAttribute('class', attributes);

            // If attributes is object, we
            // get each property and set as attributes
            // on the element
        } else if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
            var keys = Object.keys(attributes);
            keys.forEach(function (key) {
                var value = attributes[key];

                // If key equals to className
                // we rename it to key. className is used
                // because the word 'class' is private in Javascript.
                if (key === 'className') {
                    key = 'class';
                }

                if (typeof value !== 'string') {
                    throw 'Attributes\' property \'' + key + '\' has unexpected type. It expects string.';
                }

                el.setAttribute(key, value);
            });
        } else {
            throw 'Attributes has unexpected type. It expects string or object.';
        }
    }

    if (children) {
        // If children is not an array,
        // we make it an array
        if (!(children instanceof Array)) {
            children = [children];
        }

        children.forEach(function (child) {

            // If child is string or number,
            // we transform it into a text node
            if (typeof child === 'string' || typeof child === 'number') {
                child = document.createTextNode(child);

                // Otherwise, throw error if child is not an HTMLElement
            } else if (!(child instanceof HTMLElement)) {
                throw 'Child is not an HTMLElement, nor number nor string';
            }

            el.appendChild(child);
        });
    }

    return el;
};