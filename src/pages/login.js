import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='divMain'>
      <h1>Login</h1>
      <form>
        <div className='divLabel'>
          <label for="cpf">CPF: </label>
          <input type="text" name="cpf" placeholder="000.000.000-00"/>
          </div>
          <br/><br/>
          <div className='divLabel'>
          <label for="senha">Senha: </label>
          <input id="senha" type="password"/>
          </div>
          <br/><br/>
          <button>Enviar</button>
        </form>
   </div>
  )
}