import './index.scss'
import { useNavigate } from 'react-router-dom'


export default function Cabecalho() {

    const navegacao = useNavigate()

    function adm() {
        navegacao('/entrar')
    }

    return (
        <div className='cabecalho'>
            <div className='logo'>
                <img src="/images/logo.png" alt="" width={60} height={60} />
                <h3>MBL <br />VIDROS</h3>
            </div>
            <div className='links'>
                <a href="#inicio">Inicio</a>
                <a href="#servicos">Serviços</a>
                <a href="#depoimento">Depoimento</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </div>
            <div className='area'>
                <button onClick={adm}>
                    ADM
                </button>
            </div>
        </div>
    )
}