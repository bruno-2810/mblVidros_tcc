import './index.scss'



export default function Tituloadm (props) {
    return(
        <div className='titulo'>
            <h2>{props.subtitulo}</h2>
            <h3>{props.titulo}</h3>
        </div>
    )
}