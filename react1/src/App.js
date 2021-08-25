//todo elemento é uum componente
import React, { useState, useEffect } from 'react';
import './App.css';
//import styled from 'styled-components';
//import SearchBox from './Components/SearchBox';
//import Modal from './Components/modal';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/sobre'

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
/*
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
*/

//===============> aula 10 de react(Campo de input) <====================
/*
const Input = styled.input`
width:400px;
height:30px;
font-size:16px;
padding:10px;
border:1px solid black;
`;

function App() {
  //nome e ação que será feita
  
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  };
  const handleButton = () => {
    alert(email+' - '+password);
  }
  return (
    <>
      <Input  placeholder="digite um email" type='email' value={email} onChange={handleEmailInput} />
      <Input  placeholder="digite uma senha" type='password' value={password} onChange={handlePasswordInput} />
      <button onClick={handleButton}>Dizer</button>
    </>
  )
};
export default App;
*/
//===============> aula 11 de react(Condicional de exibição) <====================
/*
const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid black;
`;

function App() {

  const [email, setEmail] = useState('');
  const [isLogged, setLogged] = useState(true);
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Input  placeholder="digite um email" type='email' value={email} onChange={handleEmailInput}/>
      
      {email.length > 0 && 
        <p>{email.length} caractere{email.length != 1 ? 's' : ''}</p>
      }

      {isLogged ? <button>Sair</button> : <button>Fazer login</button>}
    </>
  )
};
*/
//===============> aula 12 de react(exercicio calculadora) <====================
/*
const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:5px;
  border:1px solid black;
`;
const Div = styled.div`
margin:20px;
`;
function App(){

    const [price, setPrice] = useState(0);
    const [tip, setTip] = useState(10);
    const Tip =  (tip * price/100);
    const Total = parseFloat(price) + parseFloat(Tip);

    const handlePriceInput = (e) => {
      setPrice(e.target.value);
    };
    const handleTipInput = (e) => {
      setTip(e.target.value);
    };
    return (
        <Div>
            <h1>Calculadora de Gorjeta</h1>
            <h5>Quanto deu a conta?</h5>
            <Input type="number" value={price} onChange={handlePriceInput}/>
            <br/>
            <h5>Quanto deu a conta?</h5>
            <Input type="number" value={tip} onChange={handleTipInput}/>
            
            {price > 0 &&
              <div>
                <p>Sub-total: R$ {price}</p>
                <p>Gorjeta ({tip}%): R$ {Tip}</p>
                <p>Total: R${Total}</p>
              </div>
            }
        </Div>
       
    )
}
export default App;
*/
//===============> aula 13 de react(usando useEffect) <====================
/*
function App(){

  const [contagem, setContagem] = useState(0);
  useEffect(()=>{
    document.title = "contagem: " +contagem;
  },[contagem]);

  const aumentarAction = () => {
    setContagem(contagem + 1);
  }

  return (
      <>
          <h1>Contagem: {contagem}</h1>
          <button onClick={aumentarAction}>Aumentar Numero</button>
      </>
     );
};


function App(){
  const [contagem,setContagem] = useState(0);
  useEffect(()=>{
    document.title = 'Contagem: ' + contagem;
  },[contagem])
  const aumentarAction = () => {
    setContagem(contagem + 1);
  }
  const diminuirAction = () => {
    if(contagem > 0){
      setContagem(contagem - 1);
    }
  }

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Aumentar contagem</button>
      <button onClick={diminuirAction}>Diminuir contagem</button>
    </>
  );
}
export default App;
*/
//===============> aula 14 de react(Separando em components) <====================
/*
function App(){

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao = "Faça sua busca..."/>
      <SearchBox frasePadrao = "Digite seu nome"/>
      <SearchBox />
    </>
  );
}

export default App;

//===============> aula 15 de react(trocas de dados entre components) <====================
function App(){

  const [searchText, setsearchText] = useState('');

  function handleSearchInput(novoTexto){
    setsearchText( novoTexto );
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox 
        frasePadrao = "Faça sua busca..."
        onChangeText={handleSearchInput}
      />

      <SearchBox 
        frasePadrao = {searchText}
      />

      <hr/> 

      Texto procurado {searchText}

    </>
  );
}
export default App;

//===============> aula 16 de react(Exbidindo listas) <====================

function App(){

  const [searchText, setsearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([

      {title:'Comprar o bolo', done:false},
      {title:'Pegar o cachorro ma petshop', done:true},
      {title:'Gravar aula', done:false}

    ])
  
  },[]);

  function handleSearchInput(novoTexto){
    setsearchText( novoTexto );
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox 
        frasePadrao = "Faça sua busca..."
        onChangeText={handleSearchInput}
      />

      <hr/> 

      <ul>
      {list.map((item, index)=>( 
        <li key={index}>
          {item.done &&
            <del>{item.title}</del> 
          }
          {!item.done &&
            item.title 
          }
          </li>
        )
      )}
      </ul>
    </>
  );
}
export default App;

//===============> aula 17 de react(Exbidindo listas e adcionando novos itens) <====================
function App(){

  const [searchText, setsearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([

      {title:'Comprar o bolo', done:false},
      {title:'Pegar o cachorro ma petshop', done:true},
      {title:'Gravar aula', done:false}

    ])
  
  },[]);

  function addAction(newItem){
    let newList = [...list,{title:newItem, done:false}]
    setList(newList);
  }


  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox 
        frasePadrao = "Adicione um item"
        onEnter={addAction}
      />

      <hr/> 

      <ul>
      {list.map((item, index)=>( 
        <li key={index}>
          {item.done &&
            <del>{item.title}</del> 
          }
          {!item.done &&
            item.title 
          }
          </li>
        )
      )}
      </ul>
    </>
  );
}
export default App;

//===============> aula 18 de react(Exibidindo listas e Marcando como feito) <====================
function App(){

  const [searchText, setsearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([

      {title:'Comprar o bolo', done:false},
      {title:'Pegar o cachorro na petshop', done:true},
      {title:'Gravar aula', done:false}

    ])
  
  },[]);

  function addAction(newItem){
    let newList = [...list,{title:newItem, done:false}]
    setList(newList)
  }
  function handleToggleDone(index){
    let newList = [...list];
    newList[index].done = !newList[index].done

    setList(newList)
  }
  

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox 
        frasePadrao = "Adicione um item"
        onEnter={addAction}
      />

      <hr/> 

      <ul>
      {list.map((item, index)=>( 
        <li key={index}>
          {item.done &&
            <del>{item.title}</del> 
          }
          {!item.done &&
            item.title 
          }
          <button onClick={()=>handleToggleDone(index)}>
            {item.done && 'Desfazer'}
            {!item.done && 'Fazer'}
            
          </button>
          </li>
        )
      )}
      </ul>
    </>
  );
}
export default App;

//===============> aula 19 de react(Conceitos de localStorage) <====================
function App(){
  const [name,setName] = useState(localStorage.getItem('name'));

  useEffect(()=>{

    localStorage.setItem('name',name)

  },[name])

  return (
    <>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </>
  );
}
export default App;

//===============> aula 20 de react(Modal) <====================
function App(){
  const [modalVisible,setModalVisible] = useState(false);

  function handleButtonClick(e) {
    setModalVisible(true);
  }

  return (
    <>
      <button onClick={handleButtonClick}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando 1, 2, 3...</h1>
      </Modal>
    </>
  );
}
export default App;

//===============> aula 21 de react(Routers) <====================
function App(){

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Meu site legal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}
export default App;
*/
//===============> aula 22 de react(Routers parte 2) <====================
function App(){

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Meu site legal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr/>

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/sobre">
            <Sobre/>
          </Route>
          
        </Switch>

        <hr/>

        <footer>
          Todos os direitos reservados
        </footer>
      </BrowserRouter>
    </>
  );
}
export default App;
