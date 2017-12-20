'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 3;
var addOne = function addOne() {
  count = count + 1;
  renderCounterAPP();
};

var minusOne = function minusOne() {
  if (count > 0) {
    count = count - 1;
  }
  renderCounterAPP();
};

var reset = function reset() {
  count = 0;
  renderCounterAPP();
};

var appRoot = document.getElementById('app');

var renderCounterAPP = function renderCounterAPP() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count : ',
      count
    ),
    React.createElement(
      'button',
      { id: 'my-id', className: 'button', onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { className: 'button', onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { className: 'button', onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterAPP();
