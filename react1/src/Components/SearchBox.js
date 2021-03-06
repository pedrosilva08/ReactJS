import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
//----------------------Complemento aula 14------------------------
/*
const InputText = styled.input`
    border:2px solid #000
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

function SearchBox(props){

    return (
        <InputText 
          type="text" 
          placeholder={props.frasePadrao ?? 'Digite alguma coisa'}
        />
    )

}
//exportando aquivo 
export default SearchBox;

//----------------------Complemento aula 15------------------------
const InputText = styled.input`
    border:2px solid #000
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

function SearchBox(props){

    const [texto, setTexto] = useState('');

        useEffect(()=>{
            if(props.onChangeText){
            props.onChangeText(texto)
        }
        },[texto])
  
    

  return (
        <InputText 
          type="text" 
          value={texto}
          onChange={(e)=>setTexto(e.target.value)}
          placeholder={props.frasePadrao ?? 'Digite alguma coisa'}
          />
    )
    //exportando aquivo 

}
export default SearchBox;

//----------------------Complemento aula 17------------------------
const InputText = styled.input`
    border:2px solid #000
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

function SearchBox(props){

    const [texto, setTexto] = useState('');

    function handleKeyUp(e) {
        if(e.keyCode == 13){
            if(props.onEnter){
                props.onEnter( texto )
            } 
            setTexto('')
        }
    }

  return (
        <InputText 
          type="text" 
          value={texto}
          onChange={(e)=>setTexto(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder={props.frasePadrao ?? 'Digite alguma coisa'}
        />
    )
    //exportando aquivo 

}
export default SearchBox;
*/
