# @onoffcanvas/js [![NPM version](https://img.shields.io/npm/v/@onoffcanvas/js.svg?style=flat)](https://www.npmjs.com/package/@onoffcanvas/js) [![NPM monthly downloads](https://img.shields.io/npm/dm/@onoffcanvas/js.svg?style=flat)](https://npmjs.org/package/@onoffcanvas/js) [![NPM total downloads](https://img.shields.io/npm/dt/@onoffcanvas/js.svg?style=flat)](https://npmjs.org/package/@onoffcanvas/js)  

> onoffcanvas vanillaJs package

Please consider following this project's author, [onokumus](https://github.com/onokumus), and consider starring the project to show your :heart: and support.

## Getting started

### Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save @onoffcanvas/js
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add @onoffcanvas/js
```

### Usage

> commonjs
```js
const OnoffCanvas = require('@onoffcanvas/js');
const oc = new OnoffCanvas(element, options);
```

> es2015 module or typescript
```js
import OnoffCanvas from '@onoffcanvas/js';
const oc = new OnoffCanvas(element, options);
```

> browser

1. Include `onoffcanvas` StyleSheet

  ```html
  <link rel="stylesheet" href="https://unpkg.com/@onoffcanvas/core/dist/onoffcanvas.min.css">
  ```

2. Include `onoffcanvas` plugin's code
  ```html
  <script src="https://unpkg.com/@onoffcanvas/js"></script>
  ```

3. Add class `onoffcanvas` and `id` attribute to `div` tag.
  ```html
  <div class="onoffcanvas" id="side-canvas"></div>
  ```

4. Add trigger button: Be sure to add `data-toggle="onoffcanvas"`.
  ```html
  <button data-toggle="onoffcanvas" data-target="#side-canvas">SIDE MENU</div>
  ```
5.
    a. Create new instance from Onoffcanvas

    ```js
    // element is selector or Node
    new OnoffCanvas('#side-canvas', options);
    // OR
    new OnoffCanvas(document.querySelector('#side-canvas'), options);
    ```

    b. Auto init all OnoffCanvas elements

    ```js
    OnoffCanvas.autoinit(options);
    ```

### Options

#### hideByEsc
Type: `Boolean`
Default: `true`

> Hide OnoffCanvas element with ESC key

```js
 new OnoffCanvas('#side-canvas', {
   hideByEsc: false
 });
```

or
```js
 OnoffCanvas.autoinit({
   hideByEsc: false
 });
```

#### createDrawer

Type: `Boolean`
Default: `true`

> Creates an empty `div` element. Clicking on the `div` element, hides the OnoffCanvas.

```js
 new OnoffCanvas('#side-canvas', {
   createDrawer: false
 });
```

or
```js
 OnoffCanvas.autoinit({
   createDrawer: false
 });
```

## Events

|**Event Type**      |**Description**|
|--------------|--------------|
|show.onoffcanvas    |This event fires immediately when the `show` instance method is called.|
|hide.onoffcanvas    |This event is fired immediately when the `hide` method has been called. |

```js
 new OnoffCanvas('#side-canvas')
 .on('show.onoffcanvas', (event)=>{
   console.log(event.type); // show.onoffcanvas
 }).on('hide.onoffcanvas',(event)=>{
   console.log(event.target); // <div class="onoffcanvas ...
 });
 ```

### API
#### toggle
Show/Hide OnoffCanvas element
```js
new OnoffCanvas('#side-canvas').toggle();
```
#### show
Show OnoffCanvas element
```js
new OnoffCanvas('#side-canvas').show();
```
#### hide
Hide OnoffCanvas element
```js
new OnoffCanvas('#side-canvas').hide();
```

### Canvas Options

1. Position Options : `onoffcanvas` is in absolute position by default
  - add class `is-fixed` to fixed position

  ```html
  <div class="onoffcanvas is-fixed"></div>
  ```

2. Direction Options : `onoffcanvas` is in full-screen by default
  - `is-top`
  - `is-right`
  - `is-bottom`,
  - `is-left`
  - `is-center`

  ```html
  <div class="onoffcanvas is-{top|right|bottom|left|center}" id="side-canvas"></div>
  ```

3. Opened/Closed Options : `onoffcanvas` is closed by default
  - add class `is-open` to open.

  ```html
  <div class="onoffcanvas is-open" id="side-canvas"></div>
  ```

4. Hoverable Options :
  - add class `onoffcanvas-container` to parent element
  - add class `is-hoverable` to `onoffcanvas`

```html
<div class="onoffcanvas-container">
    <div class="onoffcanvas is-hoverable" id="side-canvas"></div>
</div>
  ```

### Drawer Options

The background of the drawer is transparent. The following code should be added for the shadow.

```css
.onoffcanvas-drawer.is-open {
  background-color: rgba(0,0,0,.5);
}
```
### Trigger Options

- Type
  1. link with `href`

  ```html
  <a href="#side-canvas" data-toggle="onoffcanvas" aria-expanded="false">toggle onoffcanvas</a>
  ```

  2. button with `data-target`

  ```html
  <button data-target="#side-canvas" data-toggle="onoffcanvas" aria-expanded="false">toggle onoffcanvas</button>
  ```

- Style
  > if you want to use the default style for `onoffcanvas`, add class `onoffcanvas-toggler`

  ```html
  <a class="onoffcanvas-toggler" href="#side-canvas" data-toggle="onoffcanvas" aria-expanded="false"></a>
  ```

  OR

  ```html
  <button class="onoffcanvas-toggler" data-target="#side-canvas" data-toggle="onoffcanvas" aria-expanded="false"></button>
  ```

### Author
**onokumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2018, [onokumus](https://github.com/onokumus).
Released under the MIT License.

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on September 19, 2018._

