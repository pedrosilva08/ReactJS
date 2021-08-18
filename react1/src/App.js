//todo elemento é uum componente
import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

//apresentando classe como componente
/*
class App extends React.Component
{
  render()
  {
    return <h1>Testando 1, 2, 3...</h1>
  }
}

//outra forma de criar um componente
function App()
{
  return <h1>Testando 3,4,5</h1>
}

//Terceira forma de criar um componente
let App = () => 
{
  return <h1>Testando 6,7,8</h1>
}

//forma mais curta
let App = () => <h1>Testando 10,11,12</h1>

//exportar o app(class)
export default App
*/

//===============> aula 3 de react <====================
//JSX =! html
/*

function App()
{
  //no JSx só pode retornar um elemento
  let nome = 'Pedro';
  let idade = 28;
  return <>
            <div>
              Meu nome é: {nome} e eu tenho {idade} anos
            </div>
          </>
}
*/
//<------------------segunda forma de fazer------------------->
/*
function formatarNome(usuario)
{
  return usuario.nome+' '+usuario.sobrenome;
}

function App()
{
  let usuario = 
  {
    nome: 'Pedro',
    sobrenome: 'Silva'
  }

  return <>
          <div>Meu nome é: {formatarNome(usuario)}</div>
         </>
}
*/
//<------------------terceira forma de fazer------------------->
/*
function formatarNome(usuario)
{
  return usuario.nome+' '+usuario.sobrenome;
}
function App()
{
  let imagem = 'http://www.google.com.br/google.jpg';

  return <>
          <img src= {imagem}/>
         </>
}
export default App;
*/

//===============> aula 4 de react(props) <====================
/*
function BemVindo(props)
{
  return <h1>Olá {props.nome}: você tem {props.idade} anos!</h1>
}
//usuando o prop =>  passando propriedades para o componente

function App()
{
  return <>
    <BemVindo nome='Pedro' idade = '28'/>
    <BemVindo nome='Bonieky'idade = '90'/>
    <BemVindo nome='Amanda'idade = '29'/>
  </>;
}
*/
//<------------------segunda forma de fazer------------------->
/*
function Avatar(props) {
  return(
  <div>
    <img src={props.url} alt={props.name} />
    <br/>
    <spam>{props.name}</spam>
  </div>
  )
}
function App()
{
  let user = {
    url:'http://www.google.com.br/google.jpg',
    name:'Google'
  }
  return <>
    <Avatar url={user.url} name={user.name}/>
  </>; 
}
export default App;
*/


//===============> aula 5 de react(styles) <====================
//acrescentando css no componente
/*
function Avatar(props) {
  return(
  <div className="avatar">
    <img src={props.url} alt={props.name} />
    <br/>
    <spam>{props.name}</spam>
  </div>
  )
}
function App()
{
  let user = {
    url:'http://www.google.com.br/google.jpg',
    name:'Google'
  }
  return <>
    <Avatar url={user.url} name={user.name}/>
  </>; 
}

//<------------------segunda forma de fazer------------------->
//acrescentando css no componente via stylesheet

function Avatar(props) {
  return(
  <div style={{backgroundColor:'#ff0000',padding: 20 ,width: 150}}>
    <img style={{width: 50, height: 50}} src={props.url} alt={props.name} />
    <br/>
    <spam>{props.name}</spam>
  </div>
  )
}
function App()
{
  let user = {
    url:'http://www.google.com.br/google.jpg',
    name:'Google'
  }
  return <>
    <Avatar url={user.url} name={user.name}/>
  </>; 
}

export default App;
*/


//===============> aula 6 de react(styles) <====================
/*
const Site = styled.div`
width:400px;
height:400px;
background-color #00ff00;
`;
const Title = styled.h1`
color:#ff0000;
font-size:18px;
`;
function App()
{
  return (
    <Site>
      <Title>Titulo bem legal</Title>
    </Site>
  )
};
export default App;
*/


//===============> aula 7 de react(styles) <====================
/*
const Site = styled.div`
width:400px;
height:400px;
background-color #00ff00;
`;
const Botao = styled.button`
padding:10px 15px;
border:3px dashed #ff0000;
font-size:19px;
color:#ff0000;
background-color:#fff;
margin:5px;
border-radius:5px;
`;

const BotaoPequeno  = styled(Botao)`
  padding:5px 10px;
  font-size:16px;
`;
function App()
{
  return (
    <Site>
      <Botao>Clique aqui</Botao>
      <BotaoPequeno>Clique aqui</BotaoPequeno>
    </Site>
  )
};
export default App;
*/


//===============> aula 8 de react(styles) <====================
/*
const Site = styled.div`
width:400px;
height:400px;
background-color #0000ff;
`;
const Botao = styled.button`
font-size:19px;
padding:10px 15px;
background-color: ${props => props.ativo == true ? '#0000ff' : '#ccc'};
background-color: ${props => props.ativo == true ? '#FFF' : '#000'};
`;
function App()
{
  return (
    <Site>
      <Botao ativo={true}>Clique aqui</Botao>
      <Botao ativo={false}>Clique aqui</Botao>
    </Site>
  )
};
export default App;
*/


//===============> aula 9 de react(useState) <====================
function App() {
  //nome e ação que será feita
  const [ contagem, setContagem ] = useState( 0 );

  const botaoAction = () => {
    setContagem(contagem + 1);
  };

  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique para aumentar</button>
    </>
  )
};
export default App;
