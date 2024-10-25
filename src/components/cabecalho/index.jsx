import './index.scss'


export default function Cabecalho(){

    const navegacao = useNavigate()

    function adm () {
        navegacao('/')
    }

    return(
        <div className='cabecalho'>
            <div className='logo'>
                <img src="/images/logo.png" alt="" width={70} height={70}/>
                <h3>MBL VIDROS</h3>
            </div>
            <div className='links'>
                <a href="#inicio">Inicio</a>
                <a href="#servicos">Serviços</a>
                <a href="#depoimento">Depoimento</a>
                <a href="#quemSomos">Quem somos</a>
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