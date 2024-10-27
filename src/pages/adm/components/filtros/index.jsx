import './index.scss'


function filtrosExibido () {


    return(
        <div className='balao-filtro'>
            <h2>Classificar</h2>
            <label htmlFor="az">A-Z</label>
            <input type="checkbox" checked={filtroSelecionado === 'a-z'} onChange={e => setFiltroSelecioado(e.target.checked)} />
            <label htmlFor="az">Z-A</label>
            <input type="checkbox" checked={filtroSelecionado === 'z-a'} onChange={e => setFiltroSelecioado(e.target.checked)} />
            <label htmlFor="az">Recentes</label>
            <input type="checkbox" checked={filtroSelecionado === 'recentes'} onChange={e => setFiltroSelecioado(e.target.checked)} />
            <label htmlFor="az">Antigos</label>
            <input type="checkbox" checked={filtroSelecionado === 'antigos'} onChange={e => setFiltroSelecioado(e.target.checked)} />
            <button onClick={ocultarFiltro}>Concluído</button>
        </div>
    )
}