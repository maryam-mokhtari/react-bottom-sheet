import BottomSheet from "../components/BottomSheet";
import LocaleText from '../utils/locale';
import walletIcon from '../assets/icons/wallet.svg';
import submitIcon from '../assets/icons/done.svg';
import cancelIcon from '../assets/icons/cancel.svg';

const ConfirmBottomSheet = ({ isOpen, onClose, onSubmit, loading, title, description, }) => (
  <BottomSheet
    id='GPS'
    isOpen={isOpen}
    onClose={onClose}
    submit={{
      text: LocaleText().UNDERSTOOD,
      handler: onSubmit,
      isLoading: loading,
      hasWaitOnLoading: true,
      icon: submitIcon,
    }}
    cancel={{
      icon: cancelIcon,
    }}
    isExpandable
    isDismissibleOnTouchDown
    hasDimmer
  >
    <div className="box">
      <img className="icon" src={walletIcon} alt="GPS Location" />
      <div className="title">
        {title || LocaleText().CONFIRMATION}
      </div>
    </div>
    <div className="description">
      {description || LocaleText().CONFIRMATION_DESCRIPTION}
    </div>
  </BottomSheet>
)

export default ConfirmBottomSheet