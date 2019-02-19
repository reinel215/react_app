import React,{Component} from 'react';



export default class RegisterAlert extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="alert alert-success" role="alert">
                Se ha registrado satisfactoriamente 
                <button type="button" className="close" onClick={(e) =>{this.props.cerrarAlerta(e.target.name)    }} aria-label="Close" name="duplicateEmail">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    } 
}