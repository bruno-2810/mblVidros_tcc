import './index.scss';
import { useState, useEffect } from 'react';

export default function Secao2() {


    const image = [
        '/images/port.png',
        '/images/porta&janela.png',
        '/images/box2.jpg'
    ];

    const [imagemAtual, setImagemAtual] = useState(0);
    const [nextImage, setNextImage] = useState(1);


    useEffect(() => {
        
        image.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const intervalo = setInterval(() => {
            setTimeout(() => {
                
                setImagemAtual(nextImage);
                setNextImage((nextImage + 1) % image.length);
            }, 1000); 
        }, 2000);

        return () => clearInterval(intervalo);
    }, [nextImage, image]);



    return (
        <div className='secao2' id='servicos'>
            <div className='titulostyle'>
                <div className='dourado'></div>
                <div>
                    <h1>Nossos Serviços</h1>
                </div>
                <div className='dourado'></div>
            </div>
            <div className='conteudo'>
                <div className='informacoes'>
                    <h3>Vidros Residenciais</h3>
                    <ul className='lista'>
                        <li>Boxes para Banheiros;</li>
                        <li>Janelas de Vidro Temperado;</li>
                        <li>Portas de Vidro Reforçado.</li>
                    </ul>
                </div>
                <div className='slide'
                style={{
                    backgroundImage: `url(${image[imagemAtual]})`,
                }}></div>
            </div>
        </div>
    );
}



