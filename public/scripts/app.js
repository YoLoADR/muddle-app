'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  }
  e.target.elements.option.value = '';
  renderAPP();
};

var reset = function reset() {
  app.options = [];
  renderAPP();
};

var onMakeDescision = function onMakeDescision() {
  var random = Math.floor(Math.random() * app.options.length);
  var option = app.options[random];
  alert(option);
};

var appRoot = document.getElementById('app');

var renderAPP = function renderAPP() {
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
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDescision },
      ' What should I do ?'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: Date.now() * Math.random() },
          ' ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    ),
    React.createElement(
      'button',
      { className: 'button', onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderAPP();
