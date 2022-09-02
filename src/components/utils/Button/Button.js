import "./Button.css";
import PropTypes from 'prop-types'; // ES6



const ButtonClick = ({ text, onClick }) => {
    return (
        <button className="button s-button" onClick={onClick}>
            {text}
        </button>
    );
};

ButtonClick.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

ButtonClick.defaultProps = {
    onClick: () => { },
    text: ""  
}

export default ButtonClick;