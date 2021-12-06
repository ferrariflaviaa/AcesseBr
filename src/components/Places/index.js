import React from "react";
import './style.scss';
import Slider from '../Slider';

const Places = () => {
    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">Locais <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h5>Ordenarda por:</h5>
                    <select>
                        <option>Distância</option>
                        <option>Alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="place__content">
                <Slider/>
            </div>
        </section>
    )
}
export default Places;