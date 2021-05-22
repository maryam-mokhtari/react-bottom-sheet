import { useEffect, useState, useRef, memo } from 'react';
import '../assets/css/bottom-sheet.css';
import Button from './Button';
import LocaleText from '../utils/locale';
import getTouch from '../utils/touch';
import { thresholds } from '../utils/thresholds';
import { iOSVersion, isSafari } from '../utils/ios';

const BottomSheet = ({
  id,
  isOpen, onClose,
  hasDimmer,
  isDismissibleOnTouchDown,
  children,
  submit, cancel, color,
  className,
  isContentCentered,
}) => {
  const [isShown, setIsShown] = useState()
  const [autoHeight, setAutoHeight] = useState()

  const bottomSheet = useRef()

  const assignMagnitude = newMagnitude => {
    if (bottomSheet.current) {
      bottomSheet.current.style.transform = `translateY(${newMagnitude > 0 ? newMagnitude : 0}px)`;
    }
  }

  const showSheet = () => {
    setIsShown(true)
  }

  const dismissSheet = () => {
    setIsShown(false)
    const dismissTimer = setTimeout(() => {
      typeof onClose === "function" && onClose()
    }, thresholds.closeTimeout)
    return () => clearTimeout(dismissTimer)
  }

  useEffect(() => {
    if (isOpen) {
      showSheet();
    } else {
      dismissSheet();
    }
  }, [isOpen]);

  useEffect(() => {
    const iosVersion = iOSVersion()
    let autoSheetHeight
    if (bottomSheet.current) {
      if (isSafari() && (!iosVersion || (Array.isArray(iosVersion) && iosVersion[0] > 13))) {
        bottomSheet.current.style.display = 'inline-block'
        autoSheetHeight = bottomSheet.current.style.offsetHeight
        bottomSheet.current.style.display = 'block'
        setTimeout(() => {
          bottomSheet.current && (bottomSheet.current.style.display = 'flex')
        }, 0)
      }
      bottomSheet.current.style.height = 'auto'
      autoSheetHeight = bottomSheet.current.offsetHeight
      bottomSheet.current.style.height = `${window.innerHeight}px`
      if (!bottomSheet.current.style.transform && window.innerHeight >= autoSheetHeight) {
        assignMagnitude(window.innerHeight - autoSheetHeight)
      }
      setAutoHeight(autoSheetHeight)
    }
  }, [children])

  useEffect(() => {
    submit?.hasWaitOnLoading && !submit?.isLoading && dismissSheet();
  }, [submit?.isLoading, submit?.hasWaitOnLoading]);

  const buttonClick = button => {
    button && typeof button.handler === 'function' && button.handler();
    button && !button.hasWaitOnLoading && dismissSheet();
  }
  const submitClick = () => buttonClick(submit);
  const cancelClick = () => buttonClick(cancel);

  const magnitude = window.innerHeight - (isShown ? autoHeight : 0);

  let y, yDiff, prevYDiff;

  const touchMove = e => {
    const changingMagnitude = magnitude - yDiff;
    if (changingMagnitude < 0) return;

    e.stopPropagation();
    if (bottomSheet.current &&
      bottomSheet.current.style.transition !== 'none') {
      bottomSheet.current.style.transition = 'none';
    }

    const touch = getTouch(e);
    if (e.type === 'touchmove') {
      if (y) {
        prevYDiff = yDiff;
        yDiff = y - touch.clientY;
      } else {
        y = touch.clientY;
      }

      const isTouchUpAllowed = yDiff > 0 &&
        changingMagnitude > window.innerHeight - autoHeight - thresholds.touchMoveThreshold

      const isTouchDownAllowed = yDiff < 0 && !isDismissibleOnTouchDown &&
        changingMagnitude < window.innerHeight - autoHeight + thresholds.touchMoveThreshold

      if (isTouchUpAllowed || isTouchDownAllowed) {
        assignMagnitude(changingMagnitude)
      }
    }
  };
  const touchEnd = e => {
    if (bottomSheet.current &&
      bottomSheet.current.style.transition &&
      !bottomSheet.current.style.transition.includes("transform")) {
      bottomSheet.current.style.transition = 'transform .3s ease';
    }

    e.stopPropagation();
    if (yDiff === 0) return

    const isTouchDown = prevYDiff < 0;

    const changedMagnitude = magnitude - yDiff;
    yDiff = 0;
    let newMagnitude = magnitude;

    if (
      isTouchDown &&
      isDismissibleOnTouchDown &&
      changedMagnitude > window.innerHeight - thresholds.bottomTouchAutoDismissThreshold
    ) {
      newMagnitude = window.innerHeight;
      dismissSheet();
    }
    assignMagnitude(newMagnitude);
  }

  const dim = () => {
    dismissSheet();
  }

  const key = id.split('-').map((idPart, index) => index ? idPart[0].toUpperCase() + idPart.substr(1) : idPart).join('');

  if (!isOpen) return null;
  return (
    <div
      id={id && `${id}-bottom-sheet`}
      key={key}
      className={`bottom-sheet-wrapper ${className} ${isContentCentered ? 'centered' : ''}`}
    >
      {hasDimmer && <div className={`dimming ${isShown ? '' : 'hide'}`} onClick={dim} />}
      <div
        ref={bottomSheet}
        className="bottom-sheet"
        style={{
          height: `${window.innerHeight}px`,
          transform: `translateY(${magnitude > 0 ? magnitude : 0}px)`,
        }}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
      >
        <div className={`container ${magnitude < 0 || autoHeight > window.innerHeight ? 'overflow' : ''}`}>
          {children}
          {(submit || cancel) &&
            <div className="bottom-button-container">
              {submit &&
                <Button
                  color={color}
                  loading={submit.isLoading}
                  onClick={submitClick}
                  text={submit.text || LocaleText().SUBMIT}
                  isDisabled={submit.isInactive}
                  icon={submit.icon}
                />
              }
              {cancel &&
                <Button
                  color={color}
                  isInvert
                  onClick={cancelClick}
                  text={cancel.text || LocaleText().CANCEL}
                  icon={cancel.icon}
                />
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default memo(BottomSheet);