import "./Button.css";
import PropTypes from 'prop-types'; // ES6



const ButtonClick = ({ onClick, type, className, children}) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

ButtonClick.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string
}

ButtonClick.defaultProps = {
    onClick: () => { },
    type: ""
}

export default ButtonClick;