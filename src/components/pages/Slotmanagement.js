import React, { useState } from 'react';

const Slotmanagement = () => {
  const [qrId, setQrId] = useState('');
  const [slotTime, setSlotTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');

  // Sample QR IDs
  const qrIds = ['QR1', 'QR2', 'QR3', 'QR4']; // Replace with your actual QR IDs

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server or redirecting
    console.log('QR ID:', qrId);
    console.log('Slot Time:', slotTime);
    console.log('End Time:', endTime);
    console.log('Redirect URL:', redirectUrl);
    // Redirect logic here (e.g., window.location.href = redirectUrl;)
  };

  return (
    
      <div className="page-content">
        {/* start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>QR Code Selection</h4>
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
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="qrId" className="form-label">Select QR ID</label>
                        <select
                          id="qrId"
                          className="form-select"
                          value={qrId}
                          onChange={(e) => setQrId(e.target.value)}
                          required
                        >
                          <option value="">Select QR ID</option>
                          {qrIds.map((id) => (
                            <option key={id} value={id}>{id}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="slotTime" className="form-label">Select Slot Time</label>
                        <input
                          type="datetime-local"
                          id="slotTime"
                          className="form-control"
                          value={slotTime}
                          onChange={(e) => setSlotTime(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="endTime" className="form-label">Select End Time</label>
                        <input
                          type="datetime-local"
                          id="endTime"
                          className="form-control"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="redirectUrl" className="form-label">Redirect URL</label>
                        <input
                          type="url"
                          id="redirectUrl"
                          className="form-control"
                          value={redirectUrl}
                          onChange={(e) => setRedirectUrl(e.target.value)}
                          required
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div> {/* end col */}
            </div> {/* end row */}
          </div>
        </div> {/* container */}
      </div>
    
  );
};

export default Slotmanagement;
