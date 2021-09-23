import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeView = () => {
  const [state, setstate] = useState('');
  return (
    <div className="container mx-auto py-2">
      <h1>QR code</h1>
      <QRCode value="CanIHaveSpaces" />
    </div>
  );
};

export default QrCodeView;
