import { Link } from "react-router-dom";
import "./style.css"

function Sobre() {
    return (
        <>
        <div class="texto" id="cont">
            <div id="ContTexto">
                <h1>Nossa história</h1>
                <p>Fundada por Jorge Alexandre, Yure Medrado, Felipe Ferreira, Daniel Marinho,
                    Bernardo Furtado, com a ajuda de Rosangela Bocks. O Serrablocks se tornou referência mundial em tijolos personalizados.</p>
                <p>Nós fomos a primeira loja a possuir tijolos personalizados, com grandes
                    variedades de tijolos. Com o crescimento da nossa empresa estamos espalhados por todo o Brasil,
                    para atender a alta demanda dos nossos produtos.</p>
            </div>
        </div>

        <div class="texto" id="cont2">
            <div id="contTexto2">
            <   h2>De onde veio a ideia ?</h2>
                <p>Uma antiga fábrica de tijolos abandonadas, tinha uma proprietária chamada Rosangela Bocks. 
                    Ela era uma mulher de visão, 
                    uma design conceituada internacionalmente, petropolitana raiz do bairro do cascatinha.</p>

                <p>Após sua fábrica estar quase falindo ela procura ajuda de 4 jovens empreendedores, 
                    que a ajudam e criam o Serrablocks, 
                    que hoje é referência mundialmente com seus produtos com mais alta 
                    tecnologia e tendencias de mercado.</p>
            </div>

            <div class="texto" id="contTexto3">
                <h2>O que fazemos?</h2>
                <p>Temos em nosso DNA muito mais do que criatividade. Desde o início até os dias atuais, é predominante na nossa 
                    cultura empresarial a valorização das pessoas como essência em todas as nossas relações, o que trouxe 
                    novos tijolos para a nossa loja, e assim melhores resultados.</p>
                <p>Atualmente, a paixão por aproximar nossos tijolos das pessoas é o que nos move. Trabalhamos para que 
                    nossos clientes consigam cada vez melhores produtos e as pessoas cada vez mais experiências de marca 
                    mais profundas e verdadeiras.</p>
            </div>
        </div>
        </>
    )
}

export default Sobre;