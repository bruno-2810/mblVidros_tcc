import './index.scss'
import {Swiper, SwiperSlide} from 'swiper/react'


import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()




export default function Secao2() {

    const data = [
        {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
        {id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'}
    ]

    return(

        <div className='secao2'>

            <div className='titulo'>
                <h1>Nossos Serviços:</h1>
            </div>

            <div className='subtitulo'>
                <p>Vídros Residenciais:</p>
            </div>

            <div className='lista'>
                <ul>
                    <li>Janelas e Portas de Vidro;</li>
                    <li>Boxes para Banheiros;</li>
                    <li>Espelhos para Banheiros;</li>
                    <li>Tampas de Mesas.</li>
                </ul>
            
            </div>
            
            <Swiper
                slidesPerview = {1}
                pagination = {{clickable : true}}
                navigation
            >

            {data.map(  (item) => (
                <SwiperSlide key = {item.id}>
                    <img 
                        src={item.image}
                           alt="Slider"
                               className='Slide-item' />
                </SwiperSlide>
            ))}

                
              
            </Swiper>
        </div>
    )
} 

