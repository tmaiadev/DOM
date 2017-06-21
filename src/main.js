/**
 * DOM
 * @param {string} tagName 
 * @param {object|string} [attributes] 
 * @param {string|number|HTMLElement|[string|number|HTMLElement]} [children]
 * @return {HTMLElement}
 */
export default function(tagName, attributes, children) {

    if (typeof tagName !== 'string') {
        throw 'TagName has unexpected type. It expects string.';
    }

    // Create element
    const el = document.createElement(tagName);

    if (attributes) {
        // If attributes is string, 
        // then attributes is class
        if (typeof attributes === 'string') {
            el.setAttribute('class', attributes);
        
        // If attributes is object, we
        // get each property and set as attributes
        // on the element
        } else if (typeof attributes === 'object') {
            const keys = Object.keys(attributes);
            keys.forEach(key => {
                const value = attributes[key];

                // If key equals to className
                // we rename it to key. className is used
                // because the word 'class' is private in Javascript.
                if (key === 'className') {
                    key = 'class';
                }

                if (typeof value !== 'string') {
                    throw `Attributes' property '${key}' has unexpected type. It expects string.`;
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

        children.forEach(child => {
            
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
}