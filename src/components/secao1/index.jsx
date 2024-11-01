import './index.scss'
import { useState, useEffect } from 'react';

export default function Secao1() {


   /* const imagens = [
        '/images/banhe.webp',
        '/images/porta.png',
        '/images/janela.png',
        '/images/box..png'
    ];

    const [imagemAtual, setImagemAtual] = useState(0);
    const [nextImage, setNextImage] = useState(1);


    useEffect(() => {
        
        imagens.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const intervalo = setInterval(() => {
            setTimeout(() => {
                
                setImagemAtual(nextImage);
                setNextImage((nextImage + 1) % imagens.length);
            }, 1000); 
        }, 2000);

        return () => clearInterval(intervalo);
    }, [nextImage, imagens]);
*/

    return (
        <div className='secao1' id='inicio'>
            <div className='incio'
            
            >

                <div class="overlay"></div>
                <div className='content'>
                    <h1>Bem-vindo à Vidraçaria</h1>
                    <div className='logo'>
                        <img src="/images/logo.png" alt="" width={70} height={70} />
                        <h1>MBL <br /> Vidros</h1>
                    </div>
                    <h2>Soluções em Vidro com Qualidade e Segurança</h2>
                    <p>Na Vidraçaria MBL Vidros, oferecemos os melhores serviços de instalação e <br />manutenção de vidros para residências e empresas.</p>
                    <a href="#servicos" className="botao">Saiba Mais</a>
                </div>
            </div>
        </div>
    )
}