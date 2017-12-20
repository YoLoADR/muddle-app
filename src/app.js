console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var count = 3;
const addOne = () =>{
  count = count +1;
  renderCounterAPP();
}

const minusOne = () =>{
  if(count > 0){
    count = count -1;
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
