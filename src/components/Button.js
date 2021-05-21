import loadingIcon from '../assets/images/loading.svg';
import '../assets/css/button.css';
import localeText from '../utils/locale.js'
import themeColors from '../utils/theme';

const Button = ({
  text = localeText().SUBMIT, icon, loading, isDisabled, isInvert, onClick, color = "cyan"
}) =>
  <button
    className={`
      button 
      ${loading ? 'button--loading' : ''}
      ${isInvert ? `button--invert` : ''}
      ${isDisabled ? `button--disabled` : ''}
    `}
    style={
      isInvert ? {
        color: themeColors[color] || color,
        borderColor: themeColors[color] || color,
      } : {
        backgroundColor: themeColors[color] || color,
      }}
    disabled={loading || isDisabled}
    onClick={loading || isDisabled ? undefined : onClick}
  >
    {text}
    {loading &&
      <img
        className="icon"
        alt={text}
        src={loadingIcon}
      />
    }
    {icon && !loading &&
      <img
        className="icon"
        alt={text}
        src={icon}
      />
    }
  </button>

export default Button