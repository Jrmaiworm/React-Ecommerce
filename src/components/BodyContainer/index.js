import React from "react";
import { Container } from "../../styledComponents/Home/styles";
import CardProd from "../CardProd/index";
import{UncontrolledCarousel} from "reactstrap";
function BodyContainer () {

    return(
        <> 
    
    <UncontrolledCarousel
  items={[
    {
      altText: 'Destaque do mês',
      caption: '',
      key: 1,
      src: 'https://serrablocks.netlify.app/Assets/SerraBlocks/criancasFelizes.jpeg'
    },
    {
      altText: 'Destaque do mês',
      caption: '',
      key: 2,
      src: 'https://serrablocks.netlify.app/Assets/SerraBlocks/djibis.jpg'
    },
    {
      altText: 'Destaque do mês',
      caption: 'Notrabalho',
      key: 3,
      src: 'https://serrablocks.netlify.app/Assets/SerraBlocks/escritorio.jpeg'
    }
  ]}
 />

        
        <Container>
            <CardProd />
            <CardProd />
            <CardProd />
        </Container>
        </>
    );
}

export default BodyContainer;