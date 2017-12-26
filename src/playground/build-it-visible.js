class ItVisible extends React.Component {

    constructor(props) {
        super(props);
        // let para = (this.state.bool) ? <p>Je suis un paragraphe</p> : null;
        // let textButton = (this.state.onClickbool) ? <p>Hide</p> : <p>Show</p>;
        this.switchTitle = this.switchTitle.bind(this);
        this.state = {
            bool: false,
            title: "Title",
            onClickbool: false
        }
    }
    switchTitle() {
        this.setState((preveState) => {
            return {
                bool: preveState.bool ? false : true,
                onClickbool : preveState.onClickbool ? false : true
            }
        });
    };


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.switchTitle}>{this.state.onClickbool ? <p>Hide</p> : <p>Show</p>}</button>
                {this.state.bool ? <p>Je suis un paragraphe</p> : null}
            </div>
        );
    }
}

ReactDOM.render(<ItVisible />, document.getElementById('app'));

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