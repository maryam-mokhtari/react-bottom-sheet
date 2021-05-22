import loadingIcon from '../assets/icons/loading.svg';
import '../assets/css/button.css';
import themeColors from '../utils/theme';

const Button = ({
  text, icon, loading, isDisabled, isInvert, onClick, color = "blue"
}) =>
  <button
    className={`button ${loading ? 'button--loading' : ''} ${isInvert ? `button--invert` : ''} ${isDisabled ? `button--disabled` : ''}`}
    style={
      isInvert ? {
        color: themeColors[color] || color,
        borderColor: themeColors[color] || color,
      } : {
        backgroundColor: themeColors[color] || color,
        borderColor: themeColors[color] || color,
      }}
    disabled={loading || isDisabled}
    onClick={loading || isDisabled ? undefined : onClick}
  >
    {text}
    {loading &&
      <img
        className="icon button__icon"
        alt={text}
        src={loadingIcon}
      />
    }
    {icon && !loading &&
      <img
        className="icon button__icon"
        alt={text}
        src={icon}
      />
    }
  </button>

export default Button