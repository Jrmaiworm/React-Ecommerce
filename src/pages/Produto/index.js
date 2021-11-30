import { useState } from "react";
import "../../styles/global"
import {Card,CardTitle,CardSubtitle,CardText,CardBody,Button}  from 'reactstrap';
import { ImgProd } from "../../styledComponents/ImgProduto/index";



function Produto (props) {


    var dados = useState({
        id_produto: "",
        url_img: "",
        nome_produto: "",
        valor: null,

});


    return (
        <div>
        <Card
        >
          <CardBody>
            <CardTitle tag="h5">
              Descrição do Produto
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
               
              Tijolo nome
            </CardSubtitle>
            <ImgProd/>
            
            <CardText>
            Tijolo em barro cerâmico, desenvolvido com a mais alta tecnologia em tijolos, designe agradavel e extremo requinte.
             Os tijolos da Serrablocks são feitos pensando em você, sempre com as mais novas tendências do mercado.
            </CardText>
            <Button>
              Comprar
            </Button>
          </CardBody>
        </Card>
      </div>
    
    );
}

export default Produto;