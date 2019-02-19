import React,{Component} from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/NavBar'
import FormRegister from './components/FormRegister'



class App extends Component {
    render(){
        return(
            <div>
               <NavBar/>
               <div className="container">
                <FormRegister/>
               </div>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('app'));


/*class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputList: []};
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<input key={inputList.length} />)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onAddBtnClick}>Add input</button>
                {this.state.inputList.map(function(input, index) {
                    return input;
                })}
            </div>
        );
    }
}


ReactDom.render(
    <Form />,
    document.getElementById('app')
);*/