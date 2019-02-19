import React,{Component} from 'react';



export default class RegisterAlert extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="alert alert-danger" role="alert">
                Este correo ya se encuentra registrado
            </div>
        )
    } 
}

//https://www.codeproject.com/Tips/1215984/Update-State-of-a-Component-from-Another-in-React