import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='divMain'>
        <h1>Cadastro de crimes</h1>
        <form>
        <div className='divLabel'>

            <div className='divLateral'>
        <label for="data">Data: </label>
        <input id ="data" type="date" name="data"/>
        </div>
        <br/><br/>
        <div className='divLabel'>
        <label for="hora">Hora: </label>
        <input id="hora" type="time"/>
             </div>
        </div>

        <br/><br/>
        <div className='divLabel'>
        <label for="local">Local: </label>
        <input id ="local" type="text" name="local" />
        </div>
        <br/><br/>
        <div className='divLabel'>
             <div className='divLateral'>
        <label for="latitude">Latitude: </label>
        <input type="number" name="latitude"/>
        </div>
        <div className='divLabel'>
        <label for="longitude">Longitude: </label>
        <input id ="longitude" type="number" name="longitude"/>
            </div>
        </div>
        <br/><br/>
        <div className='divLabel'>
        <label for="descricao">Descrição: </label>
        <textarea type="textarea" name="descricao" rows="5" cols="33"/>
        </div>
        <button>cadastrar</button>
    </form>
   </div>
  )
}