import './index.scss'


export default function Card (props) {
    return (
        <div className="card1">

                    <div className='paragrafo'>
                        <p>"{props.texto}"</p>
                    </div>


                    <div className='cor'>
                        <p>{props.pessoa}</p>
                    </div>

                </div>
    )
}
