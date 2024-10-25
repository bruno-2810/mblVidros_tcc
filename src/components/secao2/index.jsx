import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react'


import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()




export default function Secao2() {

    const data = [
        { id: '1', image: 'https://cdn.discordapp.com/attachments/1265278324440305700/1297894242839957665/Screenshot_2024-10-21-08-43-02-488_com.instagram.android3.jpg?ex=671795b5&is=67164435&hm=ec6f564ce5f29243c111542a3d52782163c277d1eb0fdfc10b395a0ffffed244&' },


        { id: '2', image: 'https://cdn.discordapp.com/attachments/1265278324440305700/1297894242248822824/Screenshot_2024-10-21-08-40-18-649_com.instagram.android3.jpg?ex=671795b5&is=67164435&hm=a9c804e78f7968eb2bd2e9177232df3631d7e94ba5083ca01f13f4324bca8ff7&' },

        { id: '3', image: 'https://cdn.discordapp.com/attachments/1229391899224440904/1297902952635306085/Snapinsta.app_430107929_810118514281003_1101902519508358271_n_1080.jpg?ex=67179dd1&is=67164c51&hm=1b55c34b92f404ae3033acfc5d91a27acfa0504aa60a70ef080b9d50ef0acbaa&' },

        { id: '4', image: 'https://cdn.discordapp.com/attachments/1265278324440305700/1297892658194415657/Screenshot_2024-10-21-08-39-55-709_com.instagram.android3.jpg?ex=6717943b&is=671642bb&hm=ce04710075aa31df0328a946675bb59a0551176015a1c6b5ffdb2f7c7e238365&' }
    ]

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
                        slidesPerview={1}
                        pagination={{ clickable: true }}
                        navigation
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
    )
}

