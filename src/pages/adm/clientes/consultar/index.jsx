import './index.scss'
import Cabecalhoadm from '../../components/cabecalhoAdm'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function ClientesConsultar () {

    const [token, setToken] = useState(null)

    const navigate = useNavigate()

     useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (usu == 'undefined' || usu == 'null') { 
            navigate('/entrar')
            console.log(usu)
        }
    }, [])


    return(
        <div className='pagina-consultarclientes'>
            <Cabecalhoadm/>
        </div>
    )
}