import React,{Component} from 'react';


export default class interfazGrafica extends Component{

    constructor(props){
        super(props);
    }
     
    render(){
        return(
            <div className="card text-white bg-dark mt-5">
                <div className="card-header">BIENVENIDO</div>
                <div className="card-body">
                    <label className="text-light">{this.props.correo}</label>
                    <label className="text-light">{this.props.cedula}</label>
                </div>
            </div>
        )
    }
}