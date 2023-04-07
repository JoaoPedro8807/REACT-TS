import styled from 'styled-components';
import avaliacao from './assets/avaliacao.png';
import consulta from './assets/consulta.png';
import grafico from './assets/grafico.png';

interface Props {
    imagem?: string
    children?: any
}

interface IImagens {
    avaliacao: string,
    consulta: string,
    grafico: string

}


const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 25%;
    backrgoud-image: ${props => props.imagem ? `url(${props.imagem})` : 'none' }
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);

` 
const ContainerEstilizado = styled.div`
    display: flex;
    align-items: center;
`


function Titulo ({imagem, children} : Props){
    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        consulta: consulta,
        grafico: grafico
    }

    return (
        <ContainerEstilizado>
        {imagem &&  <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} /*o código antes da abertura da tag do span é para caso o spanEstilizado não recebe nenhuma imagem ele não irá oculpar nenhum espaço na nossa view  *//>} 
                <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}


export default Titulo;