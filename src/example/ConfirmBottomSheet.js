import BottomSheet from "../components/BottomSheet";
import LocaleText from '../utils/locale';
import walletIcon from '../assets/icons/wallet.svg';

const ConfirmBottomSheet = ({ isOpen, onClose, onSubmit, loading, title, description, hasIcon = true }) => (
  <BottomSheet
    id='confirm'
    isOpen={isOpen}
    onClose={onClose}
    submit={{
      text: LocaleText().YES,
      handler: onSubmit,
      isLoading: loading,
      hasWaitOnLoading: true,
      hasIcon
    }}
    cancel={{
      text: LocaleText().NO,
      hasIcon
    }}
  >
    <div className="box">
      <img className="icon" src={walletIcon} alt="Confirmation" />
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