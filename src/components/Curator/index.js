import react from "react";
import './style.scss';
import curatorPhoto from '../../imagns/perfil.jpeg'

function CuratorItem(){

    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto da Curatora Flávia Ferrari"/>
            </div>
            <div className="curator__detalls">
                <div>
                    <h3>Flávia Ferrari</h3>
                    <h6>Curatoria</h6>

                </div>
                <p>Desevolvedora desse 2020, atualmente cursado Analise e Desenvolvimento de Sistema, atualmente apredendo Front-End</p>

            </div>
        </div>
    )
}

export default CuratorItem;