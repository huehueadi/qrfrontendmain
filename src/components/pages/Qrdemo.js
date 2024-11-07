import React from 'react'
import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function Qrdemo() {

  const [showModal, setShowModal] = useState(false);
  const [selectedQr, setSelectedQr] = useState(null);
  const [qrList, setQrList] = useState([
    { id: 1, link: 'https://example.com/slot1', label: 'QR Slot 1' },
    { id: 2, link: 'https://example.com/slot2', label: 'QR Slot 2' },
    { id: 3, link: 'https://example.com/slot3', label: 'QR Slot 3' },
  ]);

  // Open modal and select QR code for editing
  const handleQrClick = (qr) => {
    setSelectedQr(qr);
    setShowModal(true);
  };

  // Update link for selected QR code
  const handleLinkChange = (e) => {
    setSelectedQr({ ...selectedQr, link: e.target.value });
  };

  // Save updated link and close modal
  const handleSaveChanges = () => {
    setQrList(
      qrList.map((qr) =>
        qr.id === selectedQr.id ? { ...qr, link: selectedQr.link } : qr
      )
    );
    setShowModal(false);
    setSelectedQr(null);
  }
  return (

    <div className="page-content">
      {/* start page title */}
      <div className="page-title-box">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title">
                <h4>Analytics Table</h4>
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
                  <div className="p-4" style={{ minHeight: 300 }}>
                    <h5>QR Code Management</h5>

                    {/* QR Code List */}
                    <div className="row mt-4">
                      {qrList.map((qr) => (
                        <div key={qr.id} className="col-md-4 text-center mb-3">
                          <QRCodeCanvas value={qr.link} size={100} onClick={() => handleQrClick(qr)} />
                          <p className="mt-2">{qr.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Modal for Link and Slot Management */}
                    {showModal && selectedQr && (
                      <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Manage Link and Slots</h5>
                              <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
                            </div>
                            <div className="modal-body">
                              <p><strong>Manage link for:</strong> {selectedQr.label}</p>
                              <label>QR Link:</label>
                              <input
                                type="text"
                                className="form-control mb-3"
                                value={selectedQr.link}
                                onChange={handleLinkChange}
                              />
                              {/* Additional fields for slot management */}
                              <label>Slot Name:</label>
                              <input type="text" className="form-control mb-2" placeholder="Enter Slot Name" />
                              <label>Slot Time:</label>
                              <input type="text" className="form-control mb-2" placeholder="Enter Slot Time" />
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

  )
}

export default Qrdemo