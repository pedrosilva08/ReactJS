//todo elemento é uum componente
import React from 'react';
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
//usuando o prop =>  passando propriedades par ao componente

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