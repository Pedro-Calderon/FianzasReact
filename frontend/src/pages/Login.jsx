import React from 'react'

const Login = ({ setSession }) => {

  const [txtRfc, setTxtRfc] = React.useState('')

  const URL = 'http://localhost:8000/login/'

  const handleLogin = async () => {
      let response = await fetch(URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              rfc: txtRfc
          })
      })
      if (response.ok) {
          let data = await response.json()
          setSession(data.usuario)
          console.log(data.message)
      }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-white flex justify-center items-center h-screen'>Finanzas Login</h1>
        <input
          type="text" className='border px-5 rounded p-1 '
          value={txtRfc}
          onChange={(e) => setTxtRfc(e.target.value)}
        />
      <div className='flex items-center justify-center h-screen'>
      <button className=' text-white py-5 px-3'
        onClick={handleLogin}>
        Login
      </button>
      </div>
    </div>
  )
}

export default Login