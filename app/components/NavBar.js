import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

var styles = {
    backgroundColor: '#043268',
  };
  
export default class NavBar extends Component{
    constructor(){
        super();
        this.state={
            correo : "",
            password : "",
            redirigir: false
        }
        this.iniciarSesion=this.iniciarSesion.bind(this);
        this.onChange=this.onChange.bind(this);
    }


    iniciarSesion(e){
        e.preventDefault();
        console.log('se envio la peticion')
        fetch('/login',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                this.setState({
                    redirigir: true
                })
            }
            
        })

        this.setState({
            correo: '',
            password: ''
        })
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }


    renderRedirect(){
        if(this.state.redirigir){
            return <Redirect to='/inside' />
        }
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
                                    <input onChange={this.onChange} name="password" type="password" className="form-control form-control-sm" id="password" aria-describedby="passwordhelp" placeholder="contraseña"/>
                                </div>
                                {this.renderRedirect()}
                                <button onClick={this.iniciarSesion}  type="submit" className="btn btn-primary btn-sm " style={{height:'30px',marginTop:'32px',marginRight:'30px'}}>iniciar sesion</button>
                            </div>
                            </form>
                </div>   
            </nav>
        )
    }
} 