// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

import MuddleApp from './components/MuddleApp';

ReactDOM.render(<MuddleApp />, document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name = "Atticot";
    }

    getGretting(){
        return `My name is ${this.name}`;
    }
}