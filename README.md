# React Bottom Sheet

This project is mainly developed to simulate a native bottom sheet with high performance and smooth animations for Progressive Web Applications.

## Demo
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/Demo.gif)

## Smooth Animation
The soft navigation of BottomSheet is prepared by utilizing many css manipulation like will-change and using translateY instead of bottom position or height. The code is basically uses a magnitude to show and hide the BottomSheet when user touches it that is suitable for all browsers and especially customized for Safari.

## Usage
A Perfect sample for using the package is prepared in `example/ChargeWallet` using `example/ConfirmBottomSheet`.
Let's have a look at the structured prepared in `ConfirmBottomSheet`:
```React
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
```
### isOpen, onClose
There are two important properties in the `BottomSheet` structure establishing the main characteristics of opening and closing the bottomsheet especially its *Animation*.
Have a look at the `example/ChargeWallet`:
```React
  <ConfirmBottomSheet
    isOpen={isConfirmed}
    onClose={() => setIsConfirmed(false)}
  />
```
`isConfirmed` and `setIsConfirmed` are pair values of a useState:
```React
  const [isConfirmed, setIsConfirmed] = useState()
```
### submit, cancel
Although any `jsx` elements including buttons can be added to `children` part of the `BottomSheet`, these two buttons with their special properties help the component to have a better and smoother action considering its loading and closing with suitable animation.
Consider the BottomSheet Button properties:
- `text`
- `hasIcon`
- `isLoading`
-  `isDisabled` 
-  `isInvert` 
-  `onClick`
-  `color`

#### Naïve Button
There are default values for both buttons so if you just want to have it with its default options you can just pass a `Boolean` 'true' value for it instead of using object and if you want to hide that button just drop using it. Let's have a look at the following example in which there is a `submit` button with default prepared options and no `cancel` button.
```React
<BottomSheet
    id='confirm'
    isOpen={isOpen}
    onClose={onClose}
    submit
  >
.
.
.
</BottomSheet>
```
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/simple.png)
#### Button Color
There are eight provided theme colors:
  - red
  - green
  - blue
  - cyan
  - gold
  - purple
  - pink
  - black
  
 These are themes and designs for the colors while any new colors can be used by its own color code or name.
 
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/green.png)
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/cyan.png)
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/blue.png)
![](https://raw.githubusercontent.com/mayyamak/react-bottom-sheet/master/src/images/black.png)

#### Button Icon
Button Icon can be used or dropped whose parameter is provided in `hasIcon` parameter.

#### Button Loading
`hasWaitOnLoading` is utilized to keep the BottomSheet open in loading state and is true by default. You can drop it if you want the BottomSheet to be closed immediately.

### hasDimmer, isDismissibleOnTouchDown
 `hasDimmer` and `isDismissibleOnTouchDown` are true by default. 
 `hasDimmer` utilizes a dimming effect on `BottomSheet` shown.
 `isDismissibleOnTouchDown` utilizes a behavior when iOS user touches down the `BottomSheet` to dismiss it.

## Commands
In the project directory, you can use the following commands:

### `yarn`
Installs packages.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It has Hot reload inherently and the page will reload if you make edits.\
It has utilized react linter and you will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified, the filenames include the hashes.

## License
Licensed by MIT
&copy; Maryam Mokhtari 

Github:[@mayyamak](https://github.com/mayyamak) 

Email: [maryam.mokhtari@gmail.com](mailto:maryam.mokhtari@gmail.com)
