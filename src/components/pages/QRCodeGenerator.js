// QRCodeGenerator.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Import the QRCodeCanvas
import { v4 as uuidv4 } from 'uuid'; // Import the UUID generator

const QRCodeGenerator = () => {
    const [url, setUrl] = useState('');
    const [qrCodes, setQrCodes] = useState([]); // State to store generated QR codes
    const [showQR, setShowQR] = useState(false);
    const [qrId, setQrId] = useState('');

    const handleGenerateQR = () => {
        if (url) {
            const newId = uuidv4(); // Generate a new UUID
            const newQrCode = { id: newId, url: url }; // Create a new QR code object
            setQrCodes([...qrCodes, newQrCode]); // Add it to the state
            setQrId(newId); // Set the current QR ID
            setShowQR(true); // Show the QR code
        } else {
            alert('Please enter a valid URL');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>QR Code Generator</h1>
            <input
                type="url"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                required
            />
            <button onClick={handleGenerateQR} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
                Generate QR Code
            </button>

            {showQR && (
                <div style={{ marginTop: '20px' }}>
                    <QRCodeCanvas value={url} size={256} />
                    <p>
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                    </p>
                    <p>QR Code ID: {qrId}</p> {/* Display the QR Code ID */}
                </div>
            )}

            <div style={{ marginTop: '30px' }}>
                <h2>Generated QR Codes</h2>
                <ul>
                    {qrCodes.map((qr) => (
                        <li key={qr.id}>
                            ID: {qr.id}, URL: {qr.url}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
