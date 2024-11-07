import React from 'react'

function Test() {
  return (
    <div className="page-content">
      {/* start page title */}
      <div className="page-title-box">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title">
                <h4>Analytics Table</h4>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript: void(0);">DYST.io</a></li>
                  <li className="breadcrumb-item active">Analytics</li>
                </ol>
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
                  <p>No analytics data available.</p>
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
        </div>
      </div> {/* container-fluid */}
    </div>
  )
}

export default Test