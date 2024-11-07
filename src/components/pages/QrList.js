import React from 'react'

function QrList() {
  return (
    
      <div className="page-content">
        <div className="card w-100">
          <div className="card-body"></div>
          <div className="card-body">
            <h4 className="header-title mb-4">Products of the Month</h4>
            <div className="table-responsive">
              <table className="table table-centered table-nowrap mb-0">
                <thead className="thead-light">
                  <tr>
                    <th>QR ID</th>
                    <th>Original URL</th>
                    {/* <th>QR Code Image</th> */}
                    {/* <th>Click Count</th> */}
                    <th>Start Date/Time</th>
                    <th> End Date/Time</th>
                    <th>Last Updated</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#2356</td>
                    <td><img src="assets/images/product/img-7.png" width={42} className="me-3" alt />Green Chair</td>
                    <td>Kenneth Gittens</td>
                    <td>$200.00</td>
                    <td>42</td>
                    <td><span className="badge badge-pill badge-soft-primary font-size-13">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#2564</td>
                    <td><img src="assets/images/product/img-8.png" width={42} className="me-3" alt />Office Chair</td>
                    <td>Alfred Gordon</td>
                    <td>$242.00</td>
                    <td>54</td>
                    <td><span className="badge badge-pill badge-soft-success font-size-13">Active</span>
                    </td>
                  </tr>
           
                </tbody>
              </table>
            </div>
            {/* end table-responsive */}
          </div>
        </div>
      </div>
    


  )
}

export default QrList