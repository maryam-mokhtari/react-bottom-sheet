import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import BottomSheet from './components/BottomSheet';
import ConfirmBottomSheet from './example/ConfirmBottomSheet';

ReactDOM.render(
  <React.StrictMode>
    <ConfirmBottomSheet />
  </React.StrictMode>,
  document.getElementById('root')
);

export default BottomSheet