import react from "react";
import { children } from "react/cjs/react.production.min";
import './style.scss';

import PropTypes from 'prop-types';

function Butoon ({children, onClick, width}){
    return(
        <button className="button" onClick={onClick} style={{width}}>
            {children}
        </button>
    )
}

Butoon.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
}

export default Butoon 