import React, { useState } from "react";
import './styles.scss';
import imageDestack from '../../imagns/imagem-destaque.svg';
import Pills from '../../components/Pills'

const PLACES = [
    'Praça',
    'Parque',
    'Igreja',
    'Hotel',
    'Restaurante',
    'Zoológico'
]

const Home = props => {
    const [selectedPills, setSelectedPills] = useState ('')
    return(
        <main id="main-content" className="home__container">
            <div className="home_col">
                <h1 className="home__title"> {props.city} para todos</h1>
                <div className="home__image  home__image--destack hide-desktop">
                    <img src={imageDestack} alt="Imagem de um cadeirante"/>
                </div>
                <p className="home__text">Nossa missão é facilitar o encontro entre lugares exclusivos e pessoas que buscam alternartivas culturais para sair de casa, com mobilidade que todo cidadão precisa.</p>
                <p className="home__text">Checamos 10 itens esseciais de acessibilidade para pessoas com defiência em diversos pontos da cidade.</p>
                <div className="home__pills">
                    {
                        PLACES.map ((item) => (
                            <Pills
                                local={item}
                                selected={selectedPills === item}
                                onClick={() => setSelectedPills(item)}
                            />
                        ))
                    }
                    

                </div>
                
            </div>
            <div className="home__col">
                <div className="home__image  home__image--destack hide-mobile">
                    <img src={imageDestack} alt="Imagem de um cadeirante"/>
                </div>

            </div>

        </main>
    )
}
export default Home;