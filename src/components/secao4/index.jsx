import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Card from '../card';
import './index.scss';

register();

export default function Secao4() {
    const depoimentos = [
        { texto: "A vidraçaria MBL vidros transformou minha sala de estar em uma bela parede de vidro. O atendimento foi excelente e o trabalho impecável.", pessoa: "João S." },
        { texto: "Recomendo a Todos! Profissionais competentes e serviço de Primeira Qualidade. Meu escritório ficou moderno e elegante.", pessoa: "Maria F." },
        { texto: "Excelente serviço! O vidro temperado que colocaram na minha casa é de alta qualidade e super seguro.", pessoa: "Ana P." },
        { texto: "Atendimento nota 10! Muito satisfeita com a agilidade e a qualidade do trabalho.", pessoa: "Carla T." },
        { texto: "Profissionais dedicados e atenciosos. A instalação foi feita de forma rápida e limpa.", pessoa: "Ricardo M." },
    ];

    return (
        <div className="secao4" id='depoimento'>
            <div className='depoimento'>
                <h1>Depoimento dos clientes:</h1>
            </div>
            <div className='tudao'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                className='swiper'>
                    <div className='teste'>
                    {depoimentos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card texto={item.texto} pessoa={item.pessoa} />
                        </SwiperSlide>
                    ))}
                    </div>
                </Swiper>
            </div>
            <hr />
        </div>
    );
}
