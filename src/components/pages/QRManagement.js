// QRManagement.js
import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function QRManagement() {
  const [qrList, setQrList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedQr, setSelectedQr] = useState(null);

  // Fetch QR codes from backend
  useEffect(() => {
    const fetchQRCodes = async () => {
      try {
        const response = await axios.get('http://your-backend-url/api/qrcodes'); // Replace with your backend endpoint
        setQrList(response.data);  // Assuming response.data is an array of QR objects
      } catch (error) {
        console.error('Error fetching QR codes:', error);
      }
    };
    fetchQRCodes();
  }, []);

  // Open modal for editing QR code link
  const handleQrClick = (qr) => {
    setSelectedQr(qr);
    setShowModal(true);
  };

  // Handle link update for selected QR code
  const handleLinkChange = (e) => {
    setSelectedQr({ ...selectedQr, link: e.target.value });
  };

  // Save updated link to backend and update UI
  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://your-backend-url/api/qrcodes/${selectedQr.id}`, { link: selectedQr.link });
      setQrList(
        qrList.map((qr) => (qr.id === selectedQr.id ? { ...qr, link: selectedQr.link } : qr))
      );
      setShowModal(false);
      setSelectedQr(null);
    } catch (error) {
      console.error('Error updating QR code link:', error);
    }
  };

  return (
   





<div className="page-content">
  {/* start page title */}
  <div className="page-title-box">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <div className="page-title">
            <h4>QR Management</h4>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end page title */}    
  <div className="container-fluid">
    <div className="page-content-wrapper">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {/* You can add any other content here instead of the table */}
              <div className="p-4" style={{ minHeight: 300 }}>
              <h5>QR Code Management</h5>

              {/* Render dynamic QR code list */}
              <div className="row mt-4">
                {qrList.map((qr) => (
                  <div key={qr.id} className="col-md-4 text-center mb-3">
                    <QRCodeCanvas value={qr.link} size={100} onClick={() => handleQrClick(qr)} />
                    <p className="mt-2">QR - {qr.id}</p>
                  </div>
                ))}
              </div>

              {/* Modal for editing QR link */}
              {showModal && selectedQr && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Manage Link for QR - {selectedQr.id}</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
                      </div>
                      <div className="modal-body">
                        <label>QR Link:</label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={selectedQr.link}
                          onChange={handleLinkChange}
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                          Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div> {/* end col */}
      </div> {/* end row */}
    </div>
  </div> {/* container-fluid */}
</div>

  );
}

export default QRManagement;
