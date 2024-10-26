import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cabecalhoadm from '../../components/cabecalhoAdm'
import './index.scss'
import axios from 'axios'



export default function ClientesCadastrar() {

    const [token, setToken] = useState(null)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState(null)
    const [endereco, setEndereco] = useState('')
    const [insercao, setInsercao] = useState(null)

    const navigate = useNavigate()

    async function salvar () {
        const cliente = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "insercao": insercao
        }

        if (nome && email && telefone && endereco && insercao) {
            const url = `http://localhost:5100/cliente?x-access-token=${token}`;
            try {
                await axios.post(url, cliente);
                navigate('/adm/clientes'); 
            } catch (error) {
                console.error('Erro ao salvar cliente:', error);
                alert('Houve um erro ao salvar o cliente. Tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    }

    function voltar () {
        navigate('/adm/clientes')
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)


        if (usu == 'undefined' || usu == 'null') {
            navigate('/entrar')
        }
    }, [])

    function enter (e) {    
        if (e.key == 'Enter') {
            salvar()
        }
    }

    return (
        <div className='pagina-cadastrarclientes'>
            <Cabecalhoadm />
            <div className='container'>
                <div className='titulo'>
                    <h2>Cadastrar Cliente</h2>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder='Digite aqui...' onKeyUp={enter} value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Digite aqui...' onKeyUp={enter} value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" placeholder='(00) 00000-0000' onKeyUp={enter} value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" placeholder='Digite aqui...' value={endereco} onKeyUp={enter} onChange={e => setEndereco(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="insercao">Data Inserção:</label>
                        <input type="date" value={insercao} onKeyUp={enter} onChange={e => setInsercao(e.target.value)}/>
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