class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count:0
    }
  }

  handleAddOne(){
    this.setState((preveState)=>{
      return {
        count: preveState.count + 1
      };
    });
  }

  handleMinusOne(){
    this.setState((preveState)=>{
      return {
        count: preveState.count - 1
      };
    });
  }

  handleReset(){
    this.setState(()=>{
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Count : {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// var count = 3;
// const addOne = () => {
//   count++;
//   renderCounterAPP();
// }

// const minusOne = () => {
//   if (count > 0) {
//     count--;
//   }
//   renderCounterAPP();
// }

// const reset = () => {
//   count = 0;
//   renderCounterAPP();
// }

// const appRoot = document.getElementById('app');

// const renderCounterAPP = () => {
//   const templateTwo = (
//     <div>
//       <div className="container">
//         <h1>Count : {count}</h1>
//         <button id="my-id" className="button" onClick={addOne}>+1</button>
//         <button className="button" onClick={minusOne}>-1</button>
//         <button className="button" onClick={reset}>Reset</button>
//       </div>
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterAPP();