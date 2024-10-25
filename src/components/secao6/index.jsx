import './index.scss'

export default function Secao6() {

    return (
        <div className="secao6" id='contato'>
            <div className='rodape'>
                <div className='logo'>
                    <img src="/images/logo.png" alt="" width={70} height={70}/>
                    <h1>MBL <br /> VIDROS</h1>
                </div>
                <div className='contato'>
                    <h1>Fale Conosco</h1>
                    <button className='whats'>
                        <img src="/images/zap.png" alt="" width={30} height={30}/>
                        Solicitar orçamento
                    </button>
                    <button className='instagram'>
                        <img src="/images/ig-removebg-preview.png" alt="" width={60} height={60}/>
                        Nossa página
                    </button>
                    <h2>e-mail: Marcio_2007-baia@hotmail.com</h2>
                </div>
            </div>
            <div>
                <footer>Copyright &copy; 2024 MBL vidros</footer>
            </div>
        </div>
    )
}