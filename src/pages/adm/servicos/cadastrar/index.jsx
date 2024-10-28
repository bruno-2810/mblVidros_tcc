import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import './index.scss';
import axios from 'axios';

export default function ServicosCadastrar() {
    const [token, setToken] = useState(null);
    const {id} = useParams();
    const [cliente, setCliente] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [realizacao, setRealizacao] = useState('');
    const [valor, setValor] = useState('');

    const navigate = useNavigate();


    async function salvar() {
        const servico = {
            "cliente": cliente,
            "titulo": titulo,
            "descricao": descricao,
            "realizacao": realizacao,
            "valor": valor
        };

        console.log("Dados do Serviço: ", servico);

        if(cliente && titulo && descricao && realizacao && valor) {
            try {
                if (id){
                    const url = `http://localhost:5100/servico/${id}?x-access-token=${token}`
                    await axios.put(url,servico)
                }else{
                    const url = `http://localhost:5100/servico?x-access-token=${token}`
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
            const url = `http://localhost:5100/servicos/${id}?x-access-token=${token}`;
            try {
                const resposta = await axios.get(url);
                const servico = resposta.data;
                setCliente(servico.cliente);
                setTitulo(servico.titulo);
                setDescricao(servico.descricao);
                setRealizacao(formatarDataParaInput(servico.realizacao));
                setValor(servico.valor);
            } catch (error) {
                console.error('Erro ao carregar dados do serviço', error)
            }
        }


        useEffect(() => {
            const usu = localStorage.getItem('USUARIO');
            setToken(usu);
    
            if (!usu) {
                navigate('/entrar');
            }
    
            if (id && usu) {
                carregarDadosCliente(id, usu);
            }
        }, []);

        function enter(e) {
            if (e.key === 'Enter') {
                salvar();
            }
        }


    return(
        <div className='servicos'>
            
        </div>
    )
}