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

export default App;