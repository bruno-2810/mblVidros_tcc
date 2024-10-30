import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import './index.scss';
import axios from 'axios';

export default function ServicosCadastrar() {
    const [token, setToken] = useState(null);
    const {id} = useParams();
    const [cliente, setCliente] = useState();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [realizacao, setRealizacao] = useState('');
    const [finalizado, setFinalizado] = useState(false)
    const [valor, setValor] = useState('');

    const navigate = useNavigate();


    async function salvar() {
        const servico = {
            "cliente": cliente,
            "idUsuario": token ? JSON.parse(atob(token.split('.')[1])).id : null,
            "titulo": titulo,
            "descricao": descricao,
            "realizacao": realizacao,
            "finalizado": finalizado,
            "valor": valor
        };

        console.log("Dados do Serviço: ", servico);

        if(cliente && titulo && descricao && realizacao && valor) {
            try {
                if (id){
                    const url = `http://localhost:5100/orcamento/${id}?x-access-token=${token}`
                    console.log(token)
                    await axios.put(url,servico)
                }else{
                    const url = `http://localhost:5100/orcamento?x-access-token=${token}`
                    await axios.post(url,servico);
                }
                navigate('/adm/servicos')
            } catch (error) {
                console.error('Erro ao salvar Serviço: ', error.response ? error.response.data : error.message);
                alert('Houve um erro ao salvar o Serviço. Tente novamente. ');
            }
        } else {
            alert('Por favor, preencha todos os campos obrigatórios. ')
        }

    }

        function voltar() {
            navigate('/adm/servicos')
        }

        function formatarDataParaInput(dataISO) {
            const data = new Date(dataISO);
            const ano = data.getFullYear();
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const dia = String(data.getDate()).padStart(2, '0');
            return `${ano}-${mes}-${dia}`;
        }
        

        async function carregarDadosServicos(id, token){
            const url = `http://localhost:5100/orcamento/${id}?x-access-token=${token}`;
            try {
                const resposta = await axios.get(url);
                const servico = resposta.data;
                
                if (servico.cliente) {
                    setCliente(servico.idCliente);
                }
                
                setTitulo(servico.titulo);
                setDescricao(servico.descricao);
                setCliente(servico.idCliente)
                setRealizacao(formatarDataParaInput(servico.realizacao));
                setFinalizado(servico.finalizado);
                setValor(servico.valor);
            } catch (error) {
                console.error('Erro ao carregar dados do serviço', error);
            }
        }


        useEffect(() => {
            const usu = localStorage.getItem('USUARIO');
            setToken(usu);
    
            if (!token) {
                navigate('/entrar');
            }
    
            if (id && usu) {
                carregarDadosServicos(id, usu);
            }
        }, []);

        function enter(e) {
            if (e.key === 'Enter') {
                salvar();
            }
        }


    return (
        <div className='pagina-cadastrarservico'>
            <Cabecalhoadm />
            <div className='container'>
                <div className='titulo'>
                    <h2>{id ? "Editar Serviço" : "Cadastrar Serviço"}</h2>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <label htmlFor="titulo">Titulo:</label>
                        <input type="text" placeholder='Digite aqui...' onKeyUp={enter} value={titulo} onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="descricao">Descrição:</label>
                        <input type="text" placeholder='Digite aqui...' onKeyUp={enter} value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="cliente">Id do Cliente:</label>
                        <input type="number" placeholder='Digite aqui...' onKeyUp={enter} value={cliente} onChange={e => setCliente(e.target.value)} /> 
                    </div>
                    <div className='input'>
                        <label htmlFor="realizacao">Data Realização:</label>
                        <input type="date" placeholder='Digite aqui...' value={realizacao} onKeyUp={enter} onChange={e => setRealizacao(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label>Finalizado ?</label>
                        <input type="checkbox" checked={finalizado} onChange={e => setFinalizado(e.target.checked)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="valor">Valor:</label>
                        <input type="number" placeholder='Digite aqui...' value={valor} onKeyUp={enter} onChange={e => setValor(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='btn' onClick={salvar}>Concluir</button>
                    <button className='btn' onClick={voltar}>Voltar</button>
                </div>
            </div>
        </div>
    )
}