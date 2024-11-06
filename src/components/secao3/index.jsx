import './index.scss'
import './responsividade.scss'

export default function Secao3() {

    return (
        <div className="secao3">

            <div className='porque'>
                <h1>Por que Escolher a Vidraçaria MBL vidros? </h1>
            </div>

            <div className='tudao'>
                <div className='descricoes'>

                    <div className='resp'>
                        <h1>Qualidade garantida:</h1>
                        <p>Utilizamos apenas materiais de qualidade para garantir durabilidade e segurança.</p>
                    </div>

                    <div className='resp'>
                        <h1 className='experientes'>Profissionais Experientes:</h1>
                        <p>Nossa Equipe é composta por vidraceiros qualificados e com vasta Experiencia no mercado.</p>
                    </div>
                </div>

                <div className='descricoespt2'>

                    <div className='resp'>
                        <h1>Atendimento Personalizado:</h1>
                        <p>cada projeto é unico, e oferecemos soluções Sobmedida para atender suas necessidades. </p>
                    </div>

                    <div className='resp'>
                        <h1 className='competitivos'>Preços Competitivos:</h1>
                        <p>Oferecemos o melhor custo-benefício para que você tenha serviços de qualidade sem comprometer o orçamento. </p>
                    </div>
                </div>
            </div>

        </div>
    )
}