import { useContext } from "react";
import { UsuariosContext } from "../Context/GlobalContext";

function Home() {
    const {usuarios, novoUsuario, versaoAtual} = useContext(UsuariosContext)

    return (
        <div>
            <h1>Home</h1>
            {usuarios[0].nome} <br/>
            <p>manolo: {novoUsuario}</p>
            <p>Versão atual: {versaoAtual}</p>
        </div>
    )
}

export default Home;