import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 

register();

export default function Secao2() {
    

    const data = [
        { id: '1', image: 'https://media.discordapp.net/attachments/1265278324440305700/1297894242839957665/Screenshot_2024-10-21-08-43-02-488_com.instagram.android3.jpg?ex=672178f5&is=67202775&hm=e4ec4a321d514d6873090fdcac7844005b46684ec122773c1a2ae696cdebcb32&=&format=webp&width=662&height=640' },
    
        { id: '2', image: 'https://cdn.discordapp.com/attachments/1265278324440305700/1297894242248822824/Screenshot_2024-10-21-08-40-18-649_com.instagram.android3.jpg?ex=672178f5&is=67202775&hm=e8b9fabc157483f9791e8c499a0eba7c55da1fb84aba5dca4cd6774134d987a4&' },
    
        { id: '3', image: 'https://media.discordapp.net/attachments/1265278324440305700/1297892659259506739/Screenshot_2024-10-21-08-39-38-160_com.instagram.android3.jpg?ex=6721777b&is=672025fb&hm=eb17840a45c96117822c67e0b796776a1e8b789c4f2cc1c6bcd781bfc7dde91b&=&format=webp&width=583&height=640' },
    
        { id: '4', image: 'https://cdn.discordapp.com/attachments/1265278324440305700/1297894241325940786/Screenshot_2024-10-21-08-40-05-570_com.instagram.android3.jpg?ex=672178f4&is=67202774&hm=cc4a8371693d7f80806422a6946dda5ef778eb285174702714d65871868755fe&' }  
    ];

   
       

    return (
        <div className='secao2' id='servicos'>
            <div className='titulostyle'>
                <div className='dourado'></div>
                <div className='titulo'>
                    <h1>Nossos Serviços</h1>
                </div>
                <div className='dourado'></div>
            </div>
            <div className='container'>
                <div className='conteudo'>
                    <div className='subtitulo'>
                        <p>Vídros Residenciais</p>
                    </div>
                    <div className='lista'>
                        <ul>
                            <li>Boxes para Banheiros;</li>
                            <li>Janelas de Vidro Temperado;</li>
                            <li>Espelhos para Banheiros;</li>
                            <li>Portas de Vidro Reforçado.</li>
                        </ul>
                    </div>
                </div>

                <div className='slidestest'>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{
                            delay: 1000, 
                            disableOnInteraction: true, 
                        }}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className='Slide-item' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}



