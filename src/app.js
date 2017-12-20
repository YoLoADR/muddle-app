console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  let option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
  }
  e.target.elements.option.value = '';
  renderAPP();
};

const reset = () =>{
  app.options = [];
  renderAPP();
}

const onMakeDescision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
};

const appRoot = document.getElementById('app');


const renderAPP = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDescision}> What should I do ?</button>
      <ol>
        {app.options.map((option)=> <li key={Date.now() * Math.random()}> {option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>

      <button className="button" onClick={reset}>Reset</button>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderAPP();
