import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


function Home(props) {

    let history = useHistory();
    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000);
    }
    const handleincrement = () =>{
        props.increment();
    }
    const handlePedro = () =>{
        props.setName('Pedro')
    }
    return(
        <div>
            <h4>Pagina Home</h4>
            
                NOME: {props.name}
                <br/>
                CONTAGEM: {props.contador}
                <br/>

                <button onClick={handlePedro}>Setar nome para Pedro</button>
                <button onClick={handleincrement}>+1</button>

            <button onClick={handleButton}>Ir para a página sobre</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        name: state.usuario.name,
        contador:state.usuario.contador
    }
}
//realizando uma ação no reducer
const mapDispatchToProps = (dispatch) => {
    return{
        setName: (newName) => dispatch({
            type:'SET_NAME',
            payload: { name:newName }//usado para mandar informações
        }),
        increment: () => dispatch({
            type:'INCREMENT_CONTADOR',
        })
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);//2 parametros passados no connect reducer e a action



