import React from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from "react-redux";


function Login(props) {
    const handleFelipe = () => {
        props.setName("Felipe")
    }
    return(
        <div>
            <h4>Pagina Login</h4>
            
            O nome é: {props.name}
            <br/><br/>
            <button onClick={handleFelipe}>Trocar nome para Felipe</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        name: state.usuario.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setName: (newName) => dispatch({
            type:'SET_NAME',
            payload: { name:newName }//usado para mandar informações
        }),
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);



