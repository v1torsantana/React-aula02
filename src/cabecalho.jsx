import {} from 'react'
import Imagem from './assets/calleri.jpg'

function Cabecalho(){

    const aluno ='aluno';
    const curso = 'fiap';
    return (
    <>
    <h1>Cabeçalho</h1>

    <img src={Imagem} alt="Toca no Calleri que é gol" width="300px" />
    <p> {aluno}</p>
    <p> {curso}</p>
    </>

    )

}

export default Cabecalho