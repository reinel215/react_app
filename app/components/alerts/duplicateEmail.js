import React,{Component} from 'react';



export default class RegisterAlert extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="alert alert-danger" role="alert">
                Este correo ya se encuentra registrado
                <button type="button" className="close" onClick={(e) =>{this.props.cerrarAlerta(e.target.name)    }} aria-label="Close" name="duplicateEmail">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    } 
}

//https://www.codeproject.com/Tips/1215984/Update-State-of-a-Component-from-Another-in-React