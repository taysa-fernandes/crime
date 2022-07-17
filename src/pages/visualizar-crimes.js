import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='divMain'>
        <h1>Visualização de crimes</h1>
        <form>
        <div className='divLabel'>

            <div className='divLateral'>
        <label for="data">Data: </label>
        <input id ="data" type="date" name="data"/>
        </div>
        <br/><br/>
        <div className='divLabel'>
        <label for="local">Local: </label>
        <input id ="local" type="text" name="local" />
            </div>
        </div>
        <br/><br/>
        <button>filtrar</button>
        <table>
            <tbody>
                            <tr>
                                <th>Data</th>
                                <th>Hora</th>
                                <th>Local</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Descrição</th>
                            </tr>
                            <tr>
                                <td>12/03/2022</td>
                                <td>12:00</td>
                                <td>são miguel</td>
                                <td>8</td>
                                <td>7</td>
                                <td>queimada</td>
                            </tr>  
                            <tr>
                                <td>15/04/2025</td>
                                <td>17:00</td>
                                <td>são gonçalo</td>
                                <td>9</td>
                                <td>4</td>
                                <td>homicidio de animal</td>
                            </tr>  
            </tbody>
            </table>
        </form>
   </div>
  )
}