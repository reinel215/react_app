import React,{Component} from 'react';

var styles = {
    backgroundColor: '#043268',
  };
  
export default class NavBar extends Component{
    constructor(){
        super();
        this.state={
            correo : "",
            password : ""
        }
        this.iniciarSesion=this.iniciarSesion.bind(this);
        this.onChange=this.onChange.bind(this);
    }


    iniciarSesion(e){
        e.preventDefault();
        fetch('/login',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }


    render(){
        return(
            <nav className="navbar navbar-dark " style={styles}>
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="row justify-content-right">
                            <form >
                            <div className="form-row">
                                <div className="form-group mx-2">
                                    <label htmlFor="exampleInputEmail1" className="text-light">correo:</label>
                                    <input onChange={this.onChange} name="correo" type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                </div>
                                <div className="form-group mx-2">
                                    <label htmlFor="exampleInputEmail1" className="text-light">contraseña:</label>
                                    <input onChange={this.onChange} type="password" className="form-control form-control-sm" id="password" aria-describedby="passwordhelp" placeholder="contraseña"/>
                                </div>
                                <button onClick={this.iniciarSesion} name="password" type="submit" className="btn btn-primary btn-sm " style={{height:'30px',marginTop:'32px',marginRight:'30px'}}>iniciar sesion</button>
                            </div>
                            </form>
                </div>   
            </nav>
        )
    }
} 