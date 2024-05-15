import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import { UsuariosContextProvider } from './Context/GlobalContext'

function App() {

  return (
    <>

      <UsuariosContextProvider>

      <Header/>

      <Outlet/>

      <Footer/>

      </UsuariosContextProvider>

    </>
  )
}

export default App
