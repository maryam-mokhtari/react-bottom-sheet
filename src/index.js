import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import BottomSheet from './components/BottomSheet';
import ChargeWallet from './example/ChargeWallet';

ReactDOM.render(
  <React.StrictMode>
    <ChargeWallet />
  </React.StrictMode>,
  document.getElementById('root')
);

export default BottomSheet