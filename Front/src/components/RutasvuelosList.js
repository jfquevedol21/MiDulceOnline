import axios from 'axios'

//HOOKS --> GANCHOS --> Gestionar los estados del componente
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'

const URI = 'http://localhost:4200/'

const CompRutavuelosListar = () => {
    const [rutas, setRuta] = useState([])
    useEffect(() => {
        getRutasvuelos()
    }, [])

    //CRECION DE METODOS DEL COMPONENTE
    //METODO PARA LISTAR LAS RUTAS DE VUELO
    const getRutasvuelos = async () => {
        const res = await axios.get(`${URI}buscarall/`)
        console.log('COLECCION DATOS ->',res.data)

        //REALIZAMOS CONVERSION DE DATOS PARA 
        //ORGANIZAR LA ESTRUCTURA DE VISUALIZACION 
        //--OPCION PARA VALIDAR
        /*const datosEstruturados = [];
        for(var i in res.data ){
            datosEstruturados.push(i,res.data[i]);
        }
        console.log('DATOS ESTRUCTURADOS->',datosEstruturados[1])*/

        setRuta(res.data['cualquier_cosa'])
        setRuta(res.data.result)
        console.log("DULCES",rutas)
    }

    //METODO PARA ELIMINAR RUTA DE VUELO
    const deleteRutaVuelo = async (id) =>{
        axios.delete(`${URI}borrar/${id}`)
        //SI ESTATUS 200
        getRutasvuelos()
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={'/crear'} className='btn btn-primary mt-2 ml-2 mb-1'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table table-dark'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='table-primary'>
                            
                            {console.log(`PORQUE NO IMPRIMES-->`, rutas)}
                            
                            {rutas.map(element =>(
                                <tr key={element._id}>
                                    <td>{element.nombre}</td>
                                    <td>{element.precio}</td>
                                    <td>{element.enstock}</td>
                                    <td>
                                    <Link to={`/edit/${element._id}`} className="fa-solid fa-pen-to-square"></Link>  
                                    &nbsp;&nbsp;&nbsp;
                                    <Link onClick={()=>deleteRutaVuelo(element._id)} className="fa-solid fa-trash-can" style={{color:'#ff6262'}}></Link>
                                    </td>
                                </tr>
                             )) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompRutavuelosListar




