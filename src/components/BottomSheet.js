import { useEffect, useState, useRef, memo } from 'react';
import '../assets/css/bottom-sheet.css';
import Button from './Button';
import LocaleText from '../utils/locale';
import getTouch from '../../utils/touch';
import { thresholds } from '../utils/thresholds';
import { iOSVersion, isSafari } from '../../utils/utilities';

const BottomSheet = ({
  id,
  isOpen, onClose,
  hasDimmer,
  isDismissibleOnTouchDown,
  children,
  submit, cancel, //color,
  className,
  isContentCentered,
}) => {
  // const [isShown, setIsShown] = useState()
  // const [autoHeight, setAutoHeight] = useState()

  // const bottomSheet = useRef()
  // const innerContainer = useRef()

  // const fullPageHeight = window.innerHeight;

  // const showSheet = () => {
  //   setIsShown(true);
  // };

  // const dismissSheet = () => {
  //   setIsShown(false);
  //   const dismissTimer = setTimeout(() => {
  //     typeof onClose === "function" && onClose();
  //   }, thresholds.closeTimeout);
  //   return () => clearTimeout(dismissTimer);
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     showSheet();
  //   } else {
  //     dismissSheet();
  //   }
  // }, [isOpen]);

  // useEffect(() => {
  //   if (bottomSheet.current) {
  //     if (isSafari() && (!iosVersion || Array.isArray(iosVersion) && iosVersion[0] > 13)) {
  //       bottomSheet.current.style.display = 'inline-block';
  //       bottomSheet.current.style.offsetHeight;
  //       bottomSheet.current.style.display = 'block';
  //       setTimeout(() => {
  //         bottomSheet.current && (bottomSheet.current.style.display = 'flex');
  //       }, 0);
  //     }
  //     bottomSheet.current.style.height = 'auto';
  //     const autoSheetHeight = bottomSheet.current.offsetHeight;
  //     bottomSheet.current.style.height = `${fullPageHeight}px`;
  //     if (!bottomSheet.current.style.transform && fullPageHeight >= autoSheetHeight) {
  //       assignMagnitude(fullPageHeight - autoSheetHeight);
  //     }
  //     setAutoHeight(autoSheetHeight);
  //   }
  // }, [children, hasExpanded]);

  // useEffect(() => {
  //   submit && submit.hasWaitOnLoading && !submit.isLoading && dismissSheet();
  // }, [submit && submit.isLoading]);

  // const buttonClick = button => {
  //   button && typeof button.handler === 'function' && button.handler();
  //   button && !button.hasWaitOnLoading && dismissSheet();
  // }
  // const submitClick = () => buttonClick(submit);
  // const cancelClick = () => buttonClick(cancel);

  // const magnitude = fullPageHeight - (isShown ? autoHeight : 0);
  
  // let y, yDiff, prevYDiff;

  // const touchMove = e => {

  //   const changingMagnitude = magnitude - yDiff;
  //   if (changingMagnitude < 0) return;

  //   e.stopPropagation();
  //   if (bottomSheet.current &&
  //     bottomSheet.current.style.transition !== 'none') {
  //     bottomSheet.current.style.transition = 'none';
  //   }

  //   const touch = getTouch(e);
  //   if (e.type === 'touchmove') {
  //     if (y) {
  //       prevYDiff = yDiff;
  //       yDiff = y - touch.clientY;
  //     } else {
  //       y = touch.clientY;
  //     }

  //     const isTouchUpAllowed = yDiff > 0 &&
  //       changingMagnitude > fullPageHeight - autoHeight - thresholds.touchMoveThreshold

  //     const isTouchDownAllowed = yDiff < 0 && !isDismissibleOnTouchDown &&
  //       changingMagnitude < fullPageHeight - autoHeight + thresholds.touchMoveThreshold

  //     if (isTouchUpAllowed || isTouchDownAllowed) {
  //       assignMagnitude(changingMagnitude)
  //     }
  //   }
  // };

  // const assignMagnitude = newMagnitude => {
  //   if (bottomSheet.current) {
  //     bottomSheet.current.style.transform = `translateY(${newMagnitude > 0 ? newMagnitude : 0}px)`;
  //   }
  // }

  // const calculateMagnitudeOnTouchEnd = () => {
  //   const isTouchDown = prevYDiff < 0;
  //   const isTouchUp = prevYDiff > 0;

  //   const changedMagnitude = magnitude - yDiff;
  //   yDiff = 0;
  //   let newMagnitude = magnitude;

  //   if (isTouchDown && isDismissibleOnTouchDown && changedMagnitude > fullPageHeight - thresholds.bottomTouchAutoDismissThreshold) {
  //     newMagnitude = fullPageHeight;
  //     dismissSheet();
  //   }
  //   assignMagnitude(newMagnitude);
  // }

  // const touchEnd = e => {
  //   if (bottomSheet.current &&
  //     bottomSheet.current.style.transition &&
  //     !bottomSheet.current.style.transition.includes("transform")) {
  //     bottomSheet.current.style.transition = 'transform .3s ease';
  //   }

  //   e.stopPropagation();
  //   yDiff &&
  //     calculateMagnitudeOnTouchEnd();
  // }

  
  // const dim = () => {
  //   dismissSheet();
  // }

  // const key = id.split('-').map((idPart, index) => index ? idPart[0].toUpperCase() + idPart.substr(1) : idPart).join('');

  // if (!isOpen) return null;
  // return (
  //   <div
  //     id={id && `${id}-bottom-sheet`}
  //     key={key}
  //     className={`bottom-sheet-wrapper ${className} ${isContentCentered?'centered':''}`}
  //   >
  //     {hasDimmer && <div className={`dimming ${isShown?'':'hide'}`} onClick={dim} />}
  //     <div
  //       ref={bottomSheet}
  //       className="bottom-sheet"
  //       style={{
  //         height: `${fullPageHeight}px`,
  //         transform: `translateY(${magnitude > 0 ? magnitude : 0}px)`,
  //       }}
  //       onTouchEnd={touchEnd}
  //       onTouchMove={touchMove}
  //     >
  //       <div className="container">
  //         <div
  //           className="inner-container"
  //           ref={innerContainer}
  //         >
  //           {children}
  //           {(submit || cancel) &&
  //             <div className="bottom-button-container">
  //               {cancel &&
  //                 <Button
  //                   color={color}
  //                   isInvert 
  //                   onClick={cancelClick}
  //                   text={cancel.text || LocaleText.CANCEL}
  //                 />
  //               }
  //               {submit &&
  //                 <Button
  //                   color={color}
  //                   loading={submit.isLoading}
  //                   onClick={submitClick}
  //                   text={submit.text || LocaleText.SUBMIT}
  //                   isDisabled={submit.isInactive}
  //                 />
  //               }
  //             </div>
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <>BottomSheet</>
}

export default memo(BottomSheet);