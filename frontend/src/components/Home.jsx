import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaSearch } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'



const Home = () => {
  const [productos, setProductos] = useState([])
  const [search, setSearch] = useState("")

  const showData = async()=>{
    const res = await fetch('http://localhost:8080/producto')
    const data = await res.json()
    setProductos(data)
  }

  const buscador = (e) =>{
    setSearch(e.target.value)
  }

  const resultados = !search ? productos : productos.filter((producto)=> producto.nombre.toLowerCase().includes(search.toLocaleLowerCase))

  useEffect(()=>{
    showData()
  }, [])
  
  return (
    <div className='contenido'>
    <Header/>
    <nav>
      <input type="text" style={{padding: '10px 40px', borderRadius: '40px 0 0 40px'}} 
      value={search} onChange={buscador} placeholder='Producto de catering'/>
      <button style={{borderRadius:'0 20px 20px 0', backgroundColor:'grey', margin:'0'}}>
        <FaSearch/>
      </button>
    </nav>
    <h2 className='subtitle'>Les ofrecemos lo mejor de nuestro Catering!!!</h2>
    <div className="index">
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
       {resultados.map((resultado)=>(
        <tr key={resultado.id}>
          <td>{resultado.id}</td>
          <td>{resultado.nombre}</td>
          <td>{resultado.descripcion}</td>
        </tr>
       ))}
      </tbody>
    </Table>
    </div>
      <Footer/>
    </div>
  )
}

export default Home
