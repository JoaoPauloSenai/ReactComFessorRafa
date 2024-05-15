import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = (({children}) => {
    let novoUsuario = 'Paulo'
    let versaoAtual = '3.1.4'
    const [usuarios, setUsuarios] = useState([
        {
            nome: 'João',
            email: 'joao@email.com'
        }
    ])

    return (
        <UsuariosContext.Provider value={{ usuarios, novoUsuario, versaoAtual}}>
            {children}
        </UsuariosContext.Provider>
    )
})

