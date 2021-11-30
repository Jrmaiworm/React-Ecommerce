import "../../styles/global";

function Header () {
    
    return (
        <>
<div class="menu" >
              <nav  >
                <ul>

                    <li ><a href="/">Home</a></li>
                    <li><a href="../Prod_por_Categoria/esqueletoProdutosPorCategoria.html">Categorias</a>
                    <ul>
                      <li class="dropdown" onclick="/filmes">Filmes</li>
                      <li class="dropdown" onclick="/series">Series </li>
                      <li class="dropdown" onclick="/animes">Animes</li>
                      <li class="dropdown" onclick="/esportes">Esportes</li>
                      <li class="dropdown" onclick="/celebridades">Celebridades</li>
                      <li class="dropdown" onclick="/herois">Herois</li>
                      <li class="dropdown" onclick="/games">Games</li>
                      <li class="dropdown" onclick="/marcas">Marcas famosas</li>

                    </ul>
                    </li>
                    <li class="li"><a href="/sobre">Sobre</a></li>
                    <li class="li"><a href="/contato">Contato</a></li>
                    <li class="li"><a href="https://www.tiktok.com/@serrablocks"><img width="30px" src="../Assets/SerraBlocks/tiktokColor.png" alt=""/></a></li>
                    <li class="li"><a href="https://www.instagram.com/serrablocks?r=nametag"><img width="25px" src="../Assets/SerraBlocks/instagramColor.png" alt=""/></a></li>
                    <li class="li"><a href="https://www.facebook.com/fabricadetijolosrj/"><img width="25px" src="../Assets/SerraBlocks/facebook.png" alt=""/></a></li>
                    <li class="li"><a href="https://www.youtube.com/watch?v=ZRIW6PdEEh8"><img width="25px" src="../Assets/SerraBlocks/youtube.png" alt=""/></a></li>
                </ul>
              </nav>
            </div>



       
        </>
    );
}

export default Header;