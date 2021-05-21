import { useState } from "react"
import localeText from "../utils/locale"
import ConfirmBottomSheet from "./ConfirmBottomSheet"
import wallet from "../assets/icons/blue-wallet.svg"
import "../assets/css/wallet.css"

const ChargeWallet = () => {
  const [isConfirmed, setIsConfirmed] = useState()
  const [isSucceeded, setIsSucceeded] = useState()
  const [isLoading, setIsLoading] = useState()
  const openConfirmSheet = () => setIsConfirmed(true)
  const submitConfirmSheet = () => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsSucceeded(true)
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }
  return (
    <div className="wallet-wrapper">
      <img className="large-icon" alt="wallet" src={wallet} onClick={openConfirmSheet} />
      {isSucceeded &&
        <div className="success">
          <label className="">
            {localeText().WALLET_CHARGE}
          </label>
          <label>23000 T</label>
        </div>
      }
      <ConfirmBottomSheet
        isOpen={isConfirmed}
        onClose={() => setIsConfirmed(false)}
        onSubmit={submitConfirmSheet}
        loading={isLoading}
      />
    </div>
  )
}

export default ChargeWallet