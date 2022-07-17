import Head from 'next/head';
import Image from 'next/image';
import React,{useState} from 'react';

export default function Cadastro() {
  const[content, setContent] = useState({
    nome: '',
    senha: '',
    cpf: '',
    email: ''
  });
  const onChangeInput = e => setContent({...content, [e.target.name]: e.target.value});
  const sendCadastro = async e =>{
    e.preventDefault();
  }
  return(
    <div className='divMain'>
        <h1>Cadastro</h1>
        <form onSubmit={sendCadastro}>
          <div className='divLabel'>
          <label htmlFor="nome">Nome: </label>
          <input id ="nome" type="text" name="nome" onChange={onChangeInput} value={content.nome}/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label htmlFor="senha">Senha: </label>
          <input id="senha" type="password"onChange={onChangeInput} value={content.senha}/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label htmlFor="cpf">CPF: </label>
          <input name="cpf" id ="cpf" type="text"  placeholder="000.000.000-00" onChange={onChangeInput} value={content.cpf}/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label htmlFor="email">Email: </label>
          <input type="e-mail" name="email" onChange={onChangeInput} value={content.email}/>
          </div>
          <br/><br/>
          <button type="submit"><a href="login">Cadastrar</a></button>
        </form>

   </div>
  )
}