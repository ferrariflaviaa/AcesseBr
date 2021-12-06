import React from "react";
import './style.scss';
import logoAcessaBr from '../../imagns/logo-acessaBR.svg';
import logoEbac from '../../imagns/logo-ebac.svg';
const Header = props => {
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR"></img>
                <span className="header__city"> / {props.city}  - {props.state}</span>
            </div>
            <div className="header__logo-- ebac">
                <span className="header__span">
                    Apoio:
                </span>
                <img src ={logoEbac} alt="Logo EBAC"></img>

            </div>
        </header>
    )
}
export default Header;