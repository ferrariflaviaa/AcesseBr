import react from "react";
import './styles.scss';
import PropTypes from 'prop-types';
const Pills = ({local, onClick, selected}) => {
    return(
        <div onClick={onClick} className={`pills__container ${selected ? 'pills__container--active' : ''}`}>
            { local }
        </div>
    )
}
Pills.propType = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.bool
}
export default Pills;