class MuddleApp extends React.Component {
  render() {
    const title = "MuddleApp Title";
    const paragraphe = "Je suis un composant réutilisable!";
    const app = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['things One', 'things Two', 'things Tree', 'things four']
    };
    return <div>
      <div className="container">
        <Header title={title} paragraphe={paragraphe}/>
        <Action />
        <Options app={app} />
      </div>
    </div>
  };
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.paragraphe}</p>
      </div>
    )
  };
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      </div>
    )
  };
}


class Options extends React.Component {
  constructor(props){
    super(props);
    this.reset = this.reset.bind(this);

  }
  onMakeDescision () {
    alert("Holla");
  };

  reset (){
    console.log("reset ok", this.props.app.options);
  }
  
  render() {

    return (
      <div>
        <h1>{this.props.app.title}</h1>
        {this.props.app.subtitle && <p>{this.props.app.subtitle}</p>}
        <p>{this.props.app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={this.props.app.options.length === 0} onClick={this.onMakeDescision}> What should I do ?</button>
        <ol>
          {this.props.app.options.map((option) => <Option key={Date.now() * Math.random()} option={option}/>)}
        </ol>
        <AddOption />
        <button className="button" onClick={this.reset}>Reset</button>
      </div>
    )
  };
}

class Option extends React.Component {
  render() {
    return <li> {this.props.option}</li>
  };
}

class AddOption extends React.Component {
  render() {
    const onFormSubmit = (e) => {
      e.preventDefault();
      let option = e.target.elements.option.value.trim();
      if (option) {
        console.log("option",option);
      }
      e.target.elements.option.value = '';
    };
    return (
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>)
  };
}


ReactDOM.render(<MuddleApp />, document.getElementById('app'));