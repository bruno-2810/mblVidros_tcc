import './index.scss'
import {useNavigate} from 'react-router-dom'

export default function Cabecalhoadm() {

    const navigate = useNavigate()

    function sair () {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    return (
        <div className='cabecalhoadm'>
            <div className='logo'>
                <img src='/images/logoadm.png' />
                <h2>MBL <br />Vidros</h2>
            </div>
            <div className='texto'>
                <h3>Bem vindo, Márcio!</h3>
            </div>
            <div className='sair'>
                <button className='btn-sair' onClick={sair}>Sair</button>
            </div>
        </div>
    )
}