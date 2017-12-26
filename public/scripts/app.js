"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItVisible = function (_React$Component) {
    _inherits(ItVisible, _React$Component);

    function ItVisible(props) {
        _classCallCheck(this, ItVisible);

        // let para = (this.state.bool) ? <p>Je suis un paragraphe</p> : null;
        // let textButton = (this.state.onClickbool) ? <p>Hide</p> : <p>Show</p>;
        var _this = _possibleConstructorReturn(this, (ItVisible.__proto__ || Object.getPrototypeOf(ItVisible)).call(this, props));

        _this.switchTitle = _this.switchTitle.bind(_this);
        _this.state = {
            bool: false,
            title: "Title",
            onClickbool: false
        };
        return _this;
    }

    _createClass(ItVisible, [{
        key: "switchTitle",
        value: function switchTitle() {
            this.setState(function (preveState) {
                return {
                    bool: preveState.bool ? false : true,
                    onClickbool: preveState.onClickbool ? false : true
                };
            });
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
                    this.state.title
                ),
                React.createElement(
                    "button",
                    { onClick: this.switchTitle },
                    this.state.onClickbool ? React.createElement(
                        "p",
                        null,
                        "Hide"
                    ) : React.createElement(
                        "p",
                        null,
                        "Show"
                    )
                ),
                this.state.bool ? React.createElement(
                    "p",
                    null,
                    "Je suis un paragraphe"
                ) : null
            );
        }
    }]);

    return ItVisible;
}(React.Component);

ReactDOM.render(React.createElement(ItVisible, null), document.getElementById('app'));

// const title = "Title";
// let bool = false;

// const renderAPP = () => {
//     let switchTitle = () => {
//         bool = (bool) ? false : true;
//         renderAPP();
//     };
//     let para = (bool) ? <p>Je suis un paragraphe</p> : null;
//     let textButton = (bool) ? <p>Hide</p> : <p>Show</p>;

//     const template = (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={switchTitle}>{textButton}</button>
//             {para}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderAPP();
