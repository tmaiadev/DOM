# DOM

This function helps you handle the DOM inside your vanilla javascript code.

## Installing via NPM

```
npm install --save-dev thalleshmm/DOM
```

## Parameters

|Parameter|Type|Optional|Description|
|---|---|---|---|
|tagName|string|no|Element name you are creating|
|attributes|object/string|yes|If you pass an object, its properties will become the elements attributes. If you pass a string, it will become the elements CSS class.|
|children|mixed|yes|It can be a string, a number or HTMLElement, or an array of these types. It will be appended to the element.|

## Samples

### 1. Input form

On Javascript
```JS
import d from 'dom';

const dom = d('div', 'form-group', [
    d('label', { 'for':'email' }, 'E-mail:'),
    d('input', { 'type': 'email', 'id': 'email', 'class': 'form-control' }) 
]);
```

Output
```HTML
<div class="form-group">
    <label for="email">E-mail:</label>
    <input type="email" id="email" class="form-control" />
</div>
```

### 2. Menu

On Javascript
```JS
import d from 'dom';

const links = [
    { name:'Home', link: 'home.html' },
    { name:'About', link: 'about.html' },
    { name:'Contact', link: 'contact.html' }
];

const dom = d('ul', 'list-group', links.map(item => {
    return d('li', 'list-group-item', 
        d('a', { 'href': item.link }, item.name)
    );
}));
```

Output
```HTML
<ul class="list-group">
    <li class="list-group">
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </li>
</ul>
```

## Licence

The MIT License (MIT)

Copyright (c) 2017 Thalles Higor Mendes Maia

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
