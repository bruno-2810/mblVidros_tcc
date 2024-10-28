import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import './index.scss';
import axios from 'axios';
import { withMask } from "use-mask-input"

export default function ClientesCadastrar() {
    const [token, setToken] = useState(null);
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [insercao, setInsercao] = useState('');
    const [foto, setFoto] = useState('');

    const navigate = useNavigate();

    async function salvar() {
        const cliente = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "insercao": insercao,
            "foto": foto
        };
    
        console.log("Dados do Cliente:", cliente); 
        console.log(cliente.foto)

        if (nome && email && telefone && endereco && insercao) {
            try {
                if (id) {
                    const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`
                    await axios.put(url, cliente);
                } else {
                    const url = `http://localhost:5100/cliente?x-access-token=${token}`
                    await axios.post(url, cliente);
                }
                navigate('/adm/clientes');
            } catch (error) {
                console.error('Erro ao salvar cliente:', error.response ? error.response.data : error.message);
                alert('Houve um erro ao salvar o cliente. Tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    }
    

    function voltar() {
        navigate('/adm/clientes');
    }

    function formatarDataParaInput(dataISO) {
        const data = new Date(dataISO);
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    async function carregarDadosCliente(id, token) {
        const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`;
        try {
            const resposta = await axios.get(url);
            const cliente = resposta.data;
            setNome(cliente.nome);
            setEmail(cliente.email);
            setTelefone(cliente.telefone);
            setEndereco(cliente.endereco);
            setInsercao(formatarDataParaInput(cliente.insercao));
            setFoto(cliente.foto)

        } catch (error) {
            console.error('Erro ao carregar dados do cliente:', error);
        }
    }

    function alterarImagem(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFoto(reader.result);
            };

            reader.readAsDataURL(file);
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

    return (
        <div className='pagina-cadastrarclientes'>
            <Cabecalhoadm />
            <div className='container'>
                <div className='titulo'>
                    <h2>{id ? "Editar Cliente" : "Cadastrar Cliente"}</h2>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder='Digite aqui...' onKeyUp={enter} value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Digite aqui...' onKeyUp={enter} value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" ref={withMask("(99) 99999-9999")} placeholder='(00) 00000-0000' onKeyUp={enter} value={telefone} onChange={e => setTelefone(e.target.value)} /> 
                        
                    </div>
                    <div className='input'>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" placeholder='Digite aqui...' value={endereco} onKeyUp={enter} onChange={e => setEndereco(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="insercao">Data Inserção:</label>
                        <input type="tel" ref={withMask("99/99/9999")} value={insercao} onKeyUp={enter} onChange={e => setInsercao(e.target.value)} />
                    </div>
                    <div className='input'>
                        <label htmlFor="foto">Foto:</label>
                        <input type="file" accept='image/*' onChange={alterarImagem} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='btn' onClick={salvar}>Concluir</button>
                    <button className='btn' onClick={voltar}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
