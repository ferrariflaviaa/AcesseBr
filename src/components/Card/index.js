import react from "react";
import './style.scss';
import Butoon from "../Butoon";
import iconAudio from '../../imagns/icon-audio-descricao 1.png'
import iconBanheiro from '../../imagns/icon-banheiro-acessivel.png';
import iconBraile from '../../imagns/icon-braile.png';
import iconCao from '../../imagns/icon-caoguia.png';
import iconElevador from '../../imagns/icon-elevador.png';
import iconEstacionamento from '../../imagns/icon-estacionamento.png';
import iconLibras from '../../imagns/icon-libras.png';
import iconPiso from '../../imagns/icon-piso-tatil.png';
import iconPorta from '../../imagns/icon-porta-larga.png';
import iconRampa from '../../imagns/icon-rampa.png';



const Card = () =>{
    return (
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__content">
                <h3>Nome do local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item">
                        <img src={iconLibras} alt="Atendimento em Libras" title="Atendimento em Libras"/>
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconAudio} alt="Audio descrição" title="Audio descrição"/>
                    </li>
                    <li className="card__facilities__item card__facilities__item--unchecked">
                    <img src={iconBanheiro} alt="Banheiro acessível" title="Banheiro acessível"/>
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconBraile} alt=" Sinalização em Braile" title=" Sinalização em Braile"/>
                    </li>
                    <li className="card__facilities__item">
                    <img src={iconElevador} alt="Elevador para cadeirantes " title="Elevador para cadeirantes"/>
                    </li>
                    <li className="card__facilities__item">
                    <img src={iconEstacionamento} alt=" Estacionamento para idosos / deficientes" title="Estacionamento para idosos / deficientes"/>
                    </li>
                    <li className="card__facilities__item">
                    <img src={iconCao} alt="Permite acesso de cães-guias" title="Permite acesso de cães-guias"/>
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconPiso} alt="Piso tátil de alerta" title="Piso tátil de alerta."/>
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconPorta} alt="Portas largas" title="Portas largas"/>
                    </li>
                    <li className="card__facilities__item">
                        <img src={iconRampa} alt="Rampas de acesso para cadeirante " title="Rampas de acesso para cadeirante "/>
                    </li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Butoon>Como chegar</Butoon>
            </div>
        </div>
    )
}
export default Card