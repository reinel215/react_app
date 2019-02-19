import React,{Component} from 'react';



export default class RegisterAlert extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="alert alert-success" role="alert">
                Se ha registrado satisfactoriamente  
            </div>
        )
    } 
}