import Card from '../card'
import './index.scss'

export default function Secao4() {

    return (
        <div className="secao4" id='depoimento'>

            <div className='depoimento'>
                <h1> Depoimento dos clientes: </h1>
            </div>

            <div className='tudao'>
                
                <Card texto="A vidraçaria  MBL vidros transformou minha sala de estar em uma bela parede de vidro. O atendimento foi excelente e o trabalho impecável." pessoa="João S."/>

                <Card texto="Recomendo a Todos! Profissinais competentes e serviço de Primeira Qualidade. Meu escritório ficou moderno e elegante." pessoa="Maria F."/>


            </div>
            <hr />
        </div>
    )
}