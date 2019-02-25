import React,{Component} from 'react';
import InterfazGrafica from './interfazGrafica'

export default class inside extends Component{
    constructor(){
        super();
        this.state={
            correo:"",
            cedula:""
        }
    }

    async componentDidMount(){
        await fetch('/inside',{
            method: 'GET'
        })
        .then( res => res.json())
        .then( data => {
            this.setState({
                correo: data.correo,
                cedula: data.cedula
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <InterfazGrafica correo={this.state.correo} cedula={this.state.cedula} />
                    </div>
                    <div className="col col-md-6">
                        
                    </div>
                </div>
            </div>
        )
    }
}