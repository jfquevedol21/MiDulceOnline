import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'http://localhost:4200/crear'

const CompRutavuelosCrear = () =>{

  //CREAMOS LOS OBJ QUE SE VAN A ENGANCHAR AL STATE --> HOOK
  const [nombre,setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [enstock, setEnstock] = useState('')

  const navigate = useNavigate()

  //METODO GUARDAR
  const insert = async(e) =>{
    e.preventDefault()
    await axios.post(URI,{nombre:nombre,precio:precio, enstock:enstock})
    //SI HAY UN STATUS 200
    navigate('/')
  }

  return(
    <div  className='espacio'>
      <h2>Agregar dulces a catalogo</h2>
      <form onSubmit={insert}>
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


        <button type='submit' className='btn btn-primary mt-2 ml-2'>crear</button>
      </form>

    </div>
  )

}
 export default CompRutavuelosCrear



