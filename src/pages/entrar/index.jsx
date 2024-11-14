import './index.scss'
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Entrar () {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function voltar () {
        navigate('/')
    }

    async function entrar () {
        const usuario = {
            "email":email ,
            "senha":senha
        }

        const url = 'http://localhost:5100/login'
        //http://4.172.207.208:5016
        let resp = await axios.post(url, usuario)

        if (resp.data.erro){
            alert(resp.data.erro)
        }
        else{
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/adm/clientes')
        }
    }

    function enter (e) {    
        if (e.key == 'Enter') {
            entrar()
        }
    }

    return(
        <div className='pagina-entrar'>
            <div className='container'>
                <div className='titulo'><h1>Administrador</h1></div>
                <div className='inputs'>
                <input id="placeholder-text" onKeyUp={enter} type="text" placeholder='Usuário' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input id="placeholder-text" onKeyUp={enter} type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div className='botoes'>
                <button className='entrar' onClick={entrar}>Entrar</button>
                <button className='voltar' onClick={voltar}>Voltar</button>
                </div>
            </div>
        </div>
    )
}