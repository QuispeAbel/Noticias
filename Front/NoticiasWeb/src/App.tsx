import { useState } from 'react';
import './App.css'
import { Cabecera, Tablero } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from './hooks';

function App() {
  const [url, setUrl] = useState(`http://noticias.test/noticias`)
  const { data, loading, error } = useFetch(url)

  const handleCategoria = (categoria:string) => {
    setUrl(`http://noticias.test/noticias/${categoria}`)
  }

  return (
    <>
      <Cabecera parentMethod={handleCategoria}/>
      <Tablero categoria={''} loading={loading} error={error} data={data} />      
    </>
  )
}

export default App
