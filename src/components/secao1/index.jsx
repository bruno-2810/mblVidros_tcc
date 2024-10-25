import './index.scss'

export default function Secao1() {

    return (
        <div className='secao1'>
            <img className='imgFundo' src="/images/img1.png" alt="" />
            <div className='textos'>
                <div>
                    <h2>Bem vindo a vidracaria</h2>
                </div>
                <div className='logo'>
                    <img src="/images/logo.png" alt="" width={70} height={70} />
                    <h3>MBL VIDROS</h3>
                </div>
                <div>
                    <h2>Soluções em vidro com qualidade e segurança</h2>
                </div>
                <div>
                    <p>na vidraçaria MBL Vidros oferecemos os melhores serviços de instalação e <br />manutenção de vidros para residências e empresas.</p>
                </div>
                <div className='saibaMais'>
                    <button>Saiba Mais</button>
                </div>
            </div>
        </div>
    )
}