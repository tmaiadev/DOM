import 'babel-polyfill';
import assert from 'assert';
import d from '../dom';

/**
 * Mock browser APIs
 */
class HTMLElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.attributes = [];
  }

  appendChild(childNode) {
    this.children.push(childNode);
  }

  setAttribute(name, value) {
    this.attributes.push({
      name: name,
      value: value
    });
  }
}
global.HTMLElement = HTMLElement;

class TextNode {
  constructor(content) {
    if (typeof content === "number") {
      content = content.toString();
    }

    this.innerHTML = content;
  }
}
global.TextNode = TextNode;

global.document = {
  createElement: function(tagName) {
    return new HTMLElement(tagName);
  },
  createTextNode: function(content) {
    return new TextNode(content);
  }
}

describe('DOM', () => {
  it('should create div', () => {
    const realNode = d('div');
    const fakeNode = document.createElement('div');
    assert.deepEqual(realNode, fakeNode);
  });

  it('should set class passing the second argument as string', () => {
    const realNode = d('div', 'abc');
    const fakeNode = document.createElement('div');
    fakeNode.setAttribute('class', 'abc');
    assert.deepEqual(realNode, fakeNode);
  });

  it('should set attributes passing second argument as object', () => {
    const realNode = d('div', { id: 'test-id', name: 'test-name' });
    const fakeNode = document.createElement('div');
    fakeNode.setAttribute('id', 'test-id');
    fakeNode.setAttribute('name', 'test-name');
    assert.deepEqual(realNode, fakeNode);
  });

  it('should append HTMLElement child', () => {
    const realNode = d('div', false, d('i'));

    const fakeChild = document.createElement('i');
    const fakeNode = document.createElement('div');
    fakeNode.appendChild(fakeChild);
    assert.deepEqual(realNode, fakeNode);
  });

  it('should append string child', () => {
    const content = 'Hello test';
    const realNode = d('div', false, content);

    const fakeChild = document.createTextNode(content);
    const fakeNode = document.createElement('div');
    fakeNode.appendChild(fakeChild);
    assert.deepEqual(realNode, fakeNode);
  });

  it('should append numeric child', () => {
    const content = 123;
    const realNode = d('div', false, content);

    const fakeChild = document.createTextNode(content);
    const fakeNode = document.createElement('div');
    fakeNode.appendChild(fakeChild);
    assert.deepEqual(realNode, fakeNode);
  });

  it('should append array of children', () => {
    const children = { a: 'h1', b: 'text node', c: 123 };

    const realNode = d('div', false, [
      d(children.a), children.b, children.c
    ]);

    const fakeChildA = document.createElement(children.a);
    const fakeChildB = document.createTextNode(children.b);
    const fakeChildC = document.createTextNode(children.c);
    const fakeNode = document.createElement('div');
    fakeNode.appendChild(fakeChildA);
    fakeNode.appendChild(fakeChildB);
    fakeNode.appendChild(fakeChildC);

    assert.deepEqual(realNode, fakeNode);
  });
})