import React, { useEffect } from 'react'


const App = ({ session, logout }) => {
  let URL = 'http://localhost:8000/tarjetas_usuario/'

  const getTarjetas = async () => {
    let response = await fetch(URL + session.idUsuario + '/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })


    if (response.ok) {
      let data = await response.json()
      console.log(data)
    }
  }

  useEffect(() => {
    getTarjetas()
  }, [])

  return (


      <nav className='bg-blue-300 text-black my-3 py-5 px-5 rounded-lg flex justify-between'>
       
        <div className='full col '>
          <button onClick={logout}>Logout</button>
        </div>

      </nav>






  )
}

export default App  