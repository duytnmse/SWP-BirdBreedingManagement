import React from "react";

const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <div className="row page-titles mx-0">
                <div className="col-sm-6 p-md-0">
                  <div className="welcome-text">
                    <h4 className="text-primary">New Patient</h4>
                  </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="/new-patient.html">New Patient</a>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title"> All Patients </h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/new-patient.html"
                            className="btn btn-primary float-end"
                          >
                            New Patient
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="example2" className="display nowrap">
                          <thead>
                            <tr>
                              <th />
                              <th>First Name</th>
                              <th>Last name</th>
                              <th>Email</th>
                              <th>Mobile No.</th>
                              <th>Birthday</th>
                              <th>Marital status</th>
                              <th>Sex</th>
                              <th>Blood Group</th>
                              <th>Patient Weight</th>
                              <th>Patient Height</th>
                              <th>Address</th>
                              <th>Patient History</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Airi </td>
                              <td>Satou</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Angelica </td>
                              <td>Ramos</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Ashton</td>
                              <td> Cox</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Bradley </td>
                              <td>Greer</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Brenden </td>
                              <td>Wagner</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Brielle </td>
                              <td>Williamson</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Bruno</td>
                              <td> Nash</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Caesar </td>
                              <td>Vance</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Cara </td>
                              <td>Stevens</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Cedric </td>
                              <td>Kelly </td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Charde </td>
                              <td>Marshall</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Colleen</td>
                              <td> Hurst</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Daidai</td>
                              <td> Rios</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td className="text-end">41</td>
                              <td className="text-end">
                                lorem ipsum kwjhdkj jkdhjkfds
                              </td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End section content */}
        {/* start section footer */}

        {/* End section footer */}
      </div>
      {/* Show data patient */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        {/* <div > */}
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                <img
                  className="rounded-circle"
                  width={35}
                  src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                  alt=""
                />{" "}
                Tiger Nixon{" "}
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="insertHere" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Show data patient */}
      {/* Modal */}
      <div
        className="modal fade"
        id="modal-edit"
        tabIndex={-1}
        aria-labelledby="modal-title-edit-row"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title-edit-row">
                Angelica Ramos
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="basic-form">
                    <form>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group row widget-3">
                            <div className="col-lg-12">
                              <div className="form-input">
                                <label
                                  className="labeltest"
                                  htmlFor="file-ip-1"
                                >
                                  <span>
                                    {" "}
                                    Drop image here or click to upload.{" "}
                                  </span>
                                </label>
                                <input
                                  type="file"
                                  id="file-ip-1"
                                  accept="image/*"
                                  onchange="showPreview(event);"
                                />
                                <div className="preview">
                                  <img
                                    id="file-ip-1-preview"
                                    src="#"
                                    alt="img"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Birthday"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option> Marital status </option>
                                <option>Married</option>
                                <option>Unmarried</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option>Sex</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option>Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4" />
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Patient Weight"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Patient Height"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group">
                            <div className="col-lg-12"></div>
                            <textarea
                              className="form-control"
                              placeholder="Address"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Patient History"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*End Modal */}
      {/* JQuery v3.5.1 */}
      {/* popper js */}
      {/* Bootstrap */}
      {/* Moment */}
      {/* Date Range Picker */}
      {/* Datatable */}
      {/* Main Custom JQuery */}
    </>
  );
};

export default page;
