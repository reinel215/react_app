import React,{Component} from 'react';
import RegisterAlert from './alerts/RegisterAlert'
import DuplicateEmail from './alerts/duplicateEmail'

let styles = {
    marginTop: '100px',
    width: '500px',
    position: 'relative',
    left: '25%'
}




function calculateAge(date) {

    var today = new Date();
    var birthday = new Date(date);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && (today.getDate() < birthday.getDate() + 1))) {
      age--;
    }
    return age;
  
}

 function validateSignUp() {
    var cedula,
      contrasenia,
      correo,
      fechaNacimiento,
      emailEx,


    correo = document.getElementById('correo').value;
    cedula = document.getElementById('cedula').value;
    fechaNacimiento = document.getElementById('fechaNacimiento').value;
    contrasenia = document.getElementById('contrasenia').value;
  
    //passwordEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
    emailEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    
  
    if (cedula === "" || correo === "" || contrasenia === "") {
      alert("Todos los campos son obligatorios");
      return false;
    } 
    else if (!emailEx.test(correo)) {
      alert("El correo es inválido");
      return false;
    } else if (calculateAge(fechaNacimiento) < 18) {
      alert("Debes tener una edad mayor o igual a 18 años para acceder al sistema")
      return false;
    }
    return true;
  };

 
















export default class FormRegister extends Component {

    constructor(){
        super();

        this.state={
            correo: "",
            contrasenia:"",
            cedula: "",
            fechaNacimiento: "",
            mesagge: {
                registered : false,
                duplicateEmail: false
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cerrarAlerta=this.cerrarAlerta.bind(this);
    }


    cerrarAlerta(name){
        this.setState({
            mesagge: {
                 [name]: false
            }
        })
    }


    
    handleChange (e){
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }

    handleSubmit (e){
        e.preventDefault();
        
        this.setState({
            mesagge: {
                registered: false,
                duplicateEmail:false
            }
        })
    
        if(validateSignUp()){ 
            fetch('/prueba',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                //show alerts
                    //show duplicate email alert code = 1062
                if(data.errno===1062){
                    this.setState({
                        mesagge:{
                            duplicateEmail: true
                        }
                    })
                }else{
                    //show succes alert
                    this.setState({
                        mesagge:{
                            registered: true
                        }
                    })
                }

            })
            .catch(err => console.log(err.code))

           

            this.setState({
                correo: '',
                contrasenia:'',
                cedula: '',
                fechaNacimiento: ''
            })
        }   
    }



    render(){
        return(
            <div className="card text-white bg-dark " style={styles}>
                <div className="card-header">Registro</div>
                <h5 className="card-title ">Crea una cuenta</h5>

                {/*put conditions to alerts for the form register*/}
                {this.state.mesagge.registered? <RegisterAlert/>: null }
                {this.state.mesagge.duplicateEmail? <DuplicateEmail cerrarAlerta={this.cerrarAlerta} />: null}




                <div className="card-body">
                <form> 
                    <div className="row">
                        <div className="col">
                            <input type="email" name="correo" id="correo" className="form-control" placeholder="usuario" onChange={this.handleChange} value={this.state.correo} />
                        </div>
                        <div className="col">
                            <input type="password" name="contrasenia" id="contrasenia" className="form-control" placeholder="contraseña" onChange={this.handleChange} value={this.state.contrasenia}/>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col">
                            <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control" onChange={this.handleChange} value={this.state.fechaNacimiento}/>
                        </div>
                        <div className="col">
                            <input type="text" name="cedula" id="cedula" className="form-control" placeholder="cedula de identidad" onChange={this.handleChange} value={this.state.cedula}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Registrar</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}


//<div></div>