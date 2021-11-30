import { Button, Card, ImgProd } from "../../styledComponents/Home/styles";


function CardProd () {

    return(
        <Card>
            <ImgProd />
            <Button><a  href="/produto">Comprar</a></Button>
        </Card>
    );
}

export default CardProd;