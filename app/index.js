import React,{Component} from 'react';
import ReactDom from 'react-dom';

var styles = {
    backgroundColor: '#043268',
  };

class App extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark " style={styles}>
                    <div className="container">
             


                        <a className="navbar-brand" href="#">Navbar</a>
                            <form className="form-inline">
                                <div className="form-row">
                                    <div className="col-sm-6">
                                    <label>correo</label>
                                    </div>
                                    <div className="col-sm-6">
                                    <label>contraseña</label>
                                    </div>
                                
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-sm" placeholder="correo electronico" aria-describedby="inputGroup-sizing-sm"/>
                                    </div>
                                    <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-sm" placeholder="contraseña" aria-describedby="inputGroup-sizing-sm"/>
                                    </div>
                                    </div>
                                </form>
                         
                        </div>
                  
                </nav>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('app'));