# PostHTML-Textr
[![npm version](https://badge.fury.io/js/posthtml-textr.svg)](http://badge.fury.io/js/posthtml-textr)

[PostHTML](http://github.com/posthtml/posthtml) plugin wrapper over [Textr](http://a.github.io/textr) modular typographic framework

## Usage

```js
var posthtml = require('posthtml'),
    html = '<article class="my-article"><h1>Hello  "world"...\n</h1><p>foo...bar</p></article>';

posthtml()
    .use(require('posthtml-textr')(
        { locale: 'ru'},
        [
            require('typographic-ellipses'),
            require('typographic-single-spaces'),
            require('typographic-quotes')
        ]
    ))
    .process(html)
    .then(function(result) {
        console.log(result.html);
        //<article class="my-article"><h1>Hello «world»…</h1><p>foo…bar</p></article>
    })
```
