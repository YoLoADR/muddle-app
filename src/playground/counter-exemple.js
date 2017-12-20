var count = 3;
const addOne = () =>{
  count++;
  renderCounterAPP();
}

const minusOne = () =>{
  if(count > 0){
    count--;
  }
  renderCounterAPP();
}

const reset = () =>{
  count = 0;
  renderCounterAPP();
}

const appRoot = document.getElementById('app');

const renderCounterAPP = () => {
  const templateTwo = (
    <div>
      <h1>Count : {count}</h1>
      <button id="my-id" className="button" onClick={addOne}>+1</button>
      <button className="button" onClick={minusOne}>-1</button>
      <button className="button" onClick={reset}>Reset</button>
    </div>
  )
  
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterAPP();