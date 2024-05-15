import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav>
            <Link to="/"> Home</Link>
            <Link to="/Cadastro"> Cadastrar</Link>
            <Link to="/Denuncias"> Denunciar usuário</Link>
            <Link to="/Test"> Test</Link>
        </nav>
    )
}

export default Navbar;