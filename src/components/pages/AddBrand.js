import React from 'react';

function AddBrand() {
  return (
    <>
      <div className="page-content">
        {/* Start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Add Brand</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End page title */}
        
        <div className="container-fluid">
          <div className="page-content-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Brand Information</h4>
                    <p className="card-title-desc">Fill all information below</p>
                    <form action='/upload' method='POST' encType='multipart/form-data'>
                      {/* Brand Name */}
                      <div className="mb-3">
                        <label className="form-label" htmlFor="brandName">Brand Name</label>
                        <input
                          id="brandName"
                          name="brandName"
                          type="text"
                          className="form-control"
                          placeholder="Enter brand name"
                          required
                        />
                      </div>
                      
                      {/* Brand Description */}
                      <div className="mb-3">
                        <label className="form-label" htmlFor="brandDescription">Brand Description</label>
                        <textarea
                          className="form-control"
                          id="brandDescription"
                          rows={5}
                          placeholder="Enter brand description"
                          required
                        />
                      </div>

                      {/* Logo Upload */}
                      <div className="mb-3">
                        <label className="form-label" htmlFor="logoUpload">Upload Logo</label>
                        <input
                          id="logoUpload"
                          name="logoUpload"
                          type="file"
                          className="form-control"
                          accept="image/*"
                          required
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <button type="submit" className="btn btn-primary">Add Brand</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
        </div> {/* End container-fluid */}
      </div>
      {/* End Page-content */}
      
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              © Your Company.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger" /> by Your Company
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AddBrand;
