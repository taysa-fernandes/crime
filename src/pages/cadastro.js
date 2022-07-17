import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='divMain'>
        <h1>Cadastro</h1>
        <form>
          <div className='divLabel'>
          <label for="nome">Nome: </label>
          <input id ="nome" type="text" name="nome"/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label for="senha">Senha: </label>
          <input id="senha" type="password"/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label for="cpf">CPF: </label>
          <input name="cpf" id ="cpf" type="text"  placeholder="000.000.000-00"/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label for="email">Email: </label>
          <input type="e-mail" name="email"/>
          </div>
          <br/><br/>
          <button>cadastrar</button>
        </form>
    
   </div>
  )
}