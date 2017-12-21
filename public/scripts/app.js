"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuddleApp = function (_React$Component) {
  _inherits(MuddleApp, _React$Component);

  function MuddleApp() {
    _classCallCheck(this, MuddleApp);

    return _possibleConstructorReturn(this, (MuddleApp.__proto__ || Object.getPrototypeOf(MuddleApp)).apply(this, arguments));
  }

  _createClass(MuddleApp, [{
    key: "render",
    value: function render() {
      var title = "MuddleApp Title";
      var paragraphe = "Je suis un composant réutilisable!";
      var app = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: ['things One', 'things Two', 'things Tree', 'things four']
      };
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(Header, { title: title, paragraphe: paragraphe }),
          React.createElement(Action, null),
          React.createElement(Options, { app: app })
        )
      );
    }
  }]);

  return MuddleApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          this.props.paragraphe
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          "This is a danger alert\u2014check it out!"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "onMakeDescision",
    value: function onMakeDescision() {
      alert("Holla");
    }
  }, {
    key: "reset",
    value: function reset() {
      console.log("reset ok");
      var that = this;
      that.props.app.options = [];
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.app.title
        ),
        this.props.app.subtitle && React.createElement(
          "p",
          null,
          this.props.app.subtitle
        ),
        React.createElement(
          "p",
          null,
          this.props.app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
          "button",
          { disabled: this.props.app.options.length === 0, onClick: this.onMakeDescision },
          " What should I do ?"
        ),
        React.createElement(
          "ol",
          null,
          this.props.app.options.map(function (option) {
            return React.createElement(Option, { key: Date.now() * Math.random(), option: option });
          })
        ),
        React.createElement(AddOption, null),
        React.createElement(
          "button",
          { className: "button", onClick: this.reset },
          "Reset"
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        " ",
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      var onFormSubmit = function onFormSubmit(e) {
        e.preventDefault();
        var option = e.target.elements.option.value.trim();
        if (option) {
          console.log("option", option);
        }
        e.target.elements.option.value = '';
      };
      return React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add option"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(MuddleApp, null), document.getElementById('app'));
