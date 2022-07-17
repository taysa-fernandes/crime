import Head from 'next/head'
import Image from 'next/image'
import sequelize from 'sequelize'


export default function Home() {
  return (
    <div className='divImage'>
        <h1>Sistema de denúncia de crimes ambientais</h1>
        <img src="../sistema.png" alt="Sistema" ></img>
        <p>O site é um sistema que possui o intuito que o cidadão tenha como denunciar os crimes ambientais que ocorrem perto ou ao redor da sua residência para que seja tomada as devidas providências necessárias e assim preservar o nosso meio ambiente.</p>
        <img src="../crime-ambiental.jpg" alt="Crime ambiental"></img>
        <p>São considerados crimes ambientais as agressões ao meio ambiente e seus componentes (flora, fauna, recursos naturais, patrimônio cultural) que ultrapassam os limites estabelecidos por lei. Ou ainda, a conduta que ignora normas ambientais legalmente estabelecidas mesmo que não sejam causados danos ao meio ambiente.</p>
        <p>Existem contra a fauna, a flora, a poluição e outros.</p>
        <p>Causar poluição de qualquer natureza em níveis tais que resultem ou possam resultar em danos à saúde humana, ou que provoquem a mortandade de animais ou a destruição significativa da flora: Pena - reclusão, de um a quatro anos, e multa. § 1º Se o crime é culposo: Pena - detenção, de seis meses a um ano, e multa.</p>
        <button><a href="login">Fazer login</a></button>
        <button><a href="cadastro">Fazer cadastro</a></button>
   </div>
  )
}