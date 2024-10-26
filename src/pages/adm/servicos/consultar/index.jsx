import Cabecalhoadm from '../../components/cabecalhoAdm'
import Tituloadm from '../../components/tituloadm'
import './index.scss'


export default function ServicosConsultar() {
    return (
        <div>
            <Cabecalhoadm />
            <Tituloadm subtitulo="Serviços" titulo="Consultar" />
            <div className='botoes'>
                <button className='acao' >Exibir</button>
                <button className='acao' >Clientes</button>
                <button className='acao' >Adicionar</button>
                <button className='acao'>Filtro</button>
            </div>
        </div>
    )
}