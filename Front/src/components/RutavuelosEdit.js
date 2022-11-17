import axios from 'axios'
import {useEffect,useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:4200/'

const CompRutavuelosEditar = ()=>{
    const [nombre,setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [enstock, setEnstock] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    //METODO EDITAR
    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${URI}actualizar/${id}`,{
            nombre:nombre,
            precio:precio, 
            enstock:enstock
        })
        
        navigate('/')
    }

    useEffect(()=>{
        getRutaById()
    },[])

    const getRutaById = async()=>{
        const res = await axios.get(`${URI}buscar/${id}`)
        console.log('ElementoBuscado-->',res.data)
        setNombre(res.data.message.nombre)
        setPrecio(res.data.message.precio)
        setEnstock(res.data.message.enstock)
    }

    return(
        <div className='espacio'>
            <h3>Editar dulces en bodega</h3>
            <form onSubmit={update}>
            <label className='form-label'>Nombre:</label>
        <input
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        type='text'
        className='form-control'
        />
         <label className='form-label'>Precio cliente:</label>
        <input
        value={precio}
        onChange={(e)=>setPrecio(e.target.value)}
        type='text'
        className='form-control'
        />
        <label className='form-label'>Cantidad en bodega:</label>

        <input value={enstock} onChange={(e)=>setEnstock(e.target.value)} type='text' className='form-control'/>
        <button type='submit' className='btn btn-success mt-2 ml-2'>Editar</button>
            </form>

        </div>
    )
}

export default CompRutavuelosEditar