import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the number of massages left
  const [massagesLeft, setMassagesLeft] = useState(20);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Function to redeem a massage
  const redeemMassage = () => {
    if (massagesLeft > 0) {
      setMassagesLeft(massagesLeft - 1);  // Decrease the count
      setConfirmationMessage('Massage Redeemed!');
      setTimeout(() => setConfirmationMessage(''), 1500); // Hide message after 1.5 seconds
    } else {
      setConfirmationMessage('No massages left!');
    }
  };

  return (
    <div className="App">
      <h1>Massage Voucher</h1>
      <p>Massages Left: {massagesLeft}</p>
      <button onClick={redeemMassage}>Redeem Massage</button>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}

export default App;

