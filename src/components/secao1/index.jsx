import './index.scss'

export default function Secao1() {

    return (
        <div className='secao1' id='inicio'>
            <div className='incio'>
                <div class="overlay"></div>
                <div className='content'>
                    <h1>Bem-vindo à Vidraçaria</h1>
                    <div className='logo'>
                        <img src="/images/logo.png" alt="" width={70} height={70} />
                        <h1>MBL <br />Vidros</h1>
                    </div>
                    <h2>Soluções em Vidro com Qualidade e Segurança</h2>
                    <p>Na Vidraçaria MBL Vidros, oferecemos os melhores serviços de instalação e <br />manutenção de vidros para residências e empresas.</p>
                    <a href="#" className="botao">Saiba Mais</a>
                </div>
            </div>
        </div>
    )
}