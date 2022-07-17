import Head from 'next/head'
import Image from 'next/image'
import React,{useState} from 'react';


export default function Home() {
  const[content, setContent] = useState({
    data: '',
    hora: '',
    local: '',
    latitude: '',
    longitude:'',
    descricao:''
  });
  const onChangeInput = e => setContent({...content, [e.target.name]: e.target.value});
  const sendCadastroCrimes = async e =>{
    e.preventDefault();
  }
  return (
    <div className='divMain'>
        <h1>Cadastro de crimes</h1>
        <form onSubmit={sendCadastroCrimes}>
        <div className='divLabel'>

            <div className='divLateral'>
        <label htmlFor="data">Data: </label>
        <input id ="data" type="date" name="data"onChange={onChangeInput} value={content.data}/>
        </div>
        <br/><br/>
        <div className='divLabel'>
        <label htmlFor="hora">Hora: </label>
        <input id="hora" type="time" onChange={onChangeInput} value={content.hora}/>
             </div>
        </div>

        <br/><br/>
        <div className='divLabel'>
        <label htmlFor="local">Local: </label>
        <input id ="local" type="text" name="local" onChange={onChangeInput} value={content.local} />
        </div>
        <br/><br/>
        <div className='divLabel'>
             <div className='divLateral'>
        <label htmlFor="latitude">Latitude: </label>
        <input type="number" name="latitude" onChange={onChangeInput} value={content.latitude}/>
        </div>
        <div className='divLabel'>
        <label htmlFor="longitude">Longitude: </label>
        <input id ="longitude" type="number" name="longitude" onChange={onChangeInput} value={content.longitude}/>
            </div>
        </div>
        <br/><br/>
        <div className='divLabel'>
        <label htmlFor="descricao">Descrição: </label>
        <textarea type="textarea" name="descricao" rows="5" cols="33" onChange={onChangeInput} value={content.descricao}/>
        </div>
        <button><a href="visualizar-crimes">Cadastrar</a></button>
    </form>
   </div>
  )
}