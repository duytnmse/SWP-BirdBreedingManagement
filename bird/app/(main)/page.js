import BreadCrum from "@/components/BreadCrum";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="content-body">
          <div className="warper container-fluid">
            <BreadCrum title="Good morning" name="vinh" content="tét title" />
            <div className="new-patients main_container">
              <div className="row">
                <div className="col-sm-6 col-xl-3 col-lg-6">
                  <div className="widget card card-primary bg-card1">
                    <div className="card-body">
                      <div className="media text-center">
                        <span>
                          <i className="fas fa-calendar-check fa-2x" />
                        </span>
                        <div className="media-body">
                          <span className="text-white">Earnings</span>
                          <h3 className="mb-0 text-white">7699</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 col-lg-6">
                  <div className="widget card card-danger bg-card2">
                    <div className="card-body">
                      <div className="media text-center">
                        <span>
                          <i className="fas fa-user-nurse fa-2x" />
                        </span>
                        <div className="media-body">
                          <span className="text-white">Patients</span>
                          <h3 className="mb-0 text-white">400</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 col-lg-6">
                  <div className="widget card card-primary bg-card3">
                    <div className="card-body">
                      <div className="media text-center">
                        <span>
                          <i className="fas fa-user-plus fa-2x" />
                        </span>
                        <div className="media-body">
                          <span className="text-white">Appointments</span>
                          <h3 className="mb-0 text-white">1360</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 col-lg-6">
                  <div className="widget card card-primary bg-card4">
                    <div className="card-body">
                      <div className="media text-center">
                        <span>
                          <i className="fas fa-database fa-2x" />
                        </span>
                        <div className="media-body">
                          <span className="text-white">Total Revenue</span>
                          <h3 className="mb-0 text-white">$6500</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="card shadow widget1">
                    <div className="card-header">
                      <h4 className="card-title">Activity</h4>
                      <span className="subtitle">TODAY 24, JAN 2019</span>
                    </div>
                    <div className="card-body">
                      <canvas id="chart1" width="100%" height={40} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card shadow widget-2">
                    <div className="card-header">
                      <h4 className="card-title">New Patient</h4>
                    </div>
                    <div className="card-body">
                      <div className="panel-body widget-media main-scroll nicescroll-box">
                        <ul className="list-group list-unstyled">
                          <li className="list-group-item d-flex justify-content-between align-items-center media">
                            <div className="d-flex">
                              <div className="img-patient">
                                <img
                                  src="https://via.placeholder.com/128/f8f8f8/2b2b2b"
                                  className="rounded-circle"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <h4 className="mb-0">Airi Satou</h4>
                                <span>Maried, Rabat</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ms-btn-icon btn-success"
                              name="button"
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center media">
                            <div className="d-flex">
                              <div className="img-patient">
                                <img
                                  src="https://via.placeholder.com/128/f8f8f8/2b2b2b"
                                  className="rounded-circle"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <h4 className="mb-0">Airi Satou</h4>
                                <span>Maried, Rabat</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ms-btn-icon btn-success"
                              name="button"
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center media">
                            <div className="d-flex">
                              <div className="img-patient">
                                <img
                                  src="https://via.placeholder.com/128/f8f8f8/2b2b2b"
                                  className="rounded-circle"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <h4 className="mb-0">Airi Satou</h4>
                                <span>Maried, Rabat</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ms-btn-icon btn-success"
                              name="button"
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center media">
                            <div className="d-flex">
                              <div className="img-patient">
                                <img
                                  src="https://via.placeholder.com/128/f8f8f8/2b2b2b"
                                  className="rounded-circle"
                                  alt="people"
                                />
                              </div>
                              <div className="media-body">
                                <h4 className="mb-0">Airi Satou</h4>
                                <span>Maried, Rabat</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ms-btn-icon btn-success"
                              name="button"
                            >
                              <i className="fas fa-arrow-right" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card shadow widget1">
                    <div className="card-header">
                      <h4 className="card-title">Top Diseases</h4>
                    </div>
                    <div className="card-body">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <canvas id="chart3" width="100%" height={220} />
                        </div>
                        <div className="col-lg-10">
                          <ul className="d-flex justify-content-between m-t-30">
                            <li className="content-widget text-center">
                              <p className="mb-0 fs-14 text-muted">Stroke</p>
                              <h4 className="mb-0 fs-20 text-dark-gray">
                                8952
                              </h4>
                            </li>
                            <li className="content-widget text-center">
                              <p className="mb-0 fs-14 text-muted">Diabetes</p>
                              <h4 className="mb-0 fs-20 text-dark-gray">
                                7458
                              </h4>
                            </li>
                            <li className="content-widget text-center">
                              <p className="mb-0 fs-14 text-muted">Cirrhosis</p>
                              <h4 className="mb-0 fs-20 text-dark-gray">
                                3254
                              </h4>
                            </li>
                            <li className="content-widget text-center">
                              <p className="mb-0 fs-14 text-muted">
                                Tuberculosis
                              </p>
                              <h4 className="mb-0 fs-20 text-dark-gray">
                                3254
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card shadow widget1">
                    <div className="card-header">
                      <h4 className="card-title">Total Patient Per Day</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="chart2" width="100%" height={299} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card shadow">
                    <div className="card-header">
                      <h4 className="card-title">
                        Appointment List | 04 Aug 2022
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="example1" className="display nowrap">
                          <thead>
                            <tr>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Patient</th>
                              <th>Address</th>
                              <th>Phone</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>07:00</td>
                              <td>01 Jun 2022</td>
                              <td> Michael R Sheets </td>
                              <td> 1468 Selah Way - Rabat</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>07:30</td>
                              <td>02 Jun 2022</td>
                              <td> Eric J Lane</td>
                              <td>1468 Selah Way - Agadir</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>08:00</td>
                              <td>03 Jun 2022</td>
                              <td> Pamela R Matheney </td>
                              <td>1468 Selah Way - Casablanca</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>08:30</td>
                              <td>04 Jun 2022</td>
                              <td> Chelsea S Coy</td>
                              <td>1468 Selah Way - Fes </td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge btn-danger">
                                  Canclled
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>09:00</td>
                              <td>05 Jun 2022</td>
                              <td> Michael R Sheets</td>
                              <td> 1468 Selah Way - Oujda</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>09:30</td>
                              <td>06 Jun 2022</td>
                              <td>Eric J Lane</td>
                              <td>1468 Selah Way - Marakesh</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 10:00 </td>
                              <td>07 Jun 2022</td>
                              <td> Pamela R Matheney </td>
                              <td>1468 Selah Way - Lexington</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 10:30 </td>
                              <td>08 Jun 2022</td>
                              <td> Chelsea S Coy </td>
                              <td>1468 Selah Way - Bakersfield </td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge btn-danger">
                                  Canclled
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 11:00 </td>
                              <td>09 Jun 2022</td>
                              <td> Michael R Sheets </td>
                              <td> 1468 Selah Way - Brattleboro</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 11:30 </td>
                              <td>10 Jun 2022</td>
                              <td> Eric J Lane</td>
                              <td>1468 Selah Way - Laayoune</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 09:00 </td>
                              <td>11 Jun 2022</td>
                              <td> Pamela R Matheney </td>
                              <td>2320 May Street - Lexington</td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge badge-primary">
                                  Start appt
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td> 09:00 </td>
                              <td>12 Jun 2022</td>
                              <td> Chelsea S Coy </td>
                              <td>3342 Lowndes Hill - Berrechid </td>
                              <td>833 - 844 - 0100</td>
                              <td className="text-start">
                                {" "}
                                <span className="badge btn-danger">
                                  Canclled
                                </span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void()"
                                  className="mr-4 check"
                                >
                                  {" "}
                                  <span className="fas fa-check" />
                                </a>
                                <a href="javascript:void()" className="delet">
                                  {" "}
                                  <span className="fas fa-trash-alt tbl-delet" />{" "}
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
            </div>
          </div>
        </div>
        {/* End section content */}
        {/* start section footer */}

        {/* End section footer */}
      </div>
      {/* JQuery v3.5.1 */}
      {/* popper js */}
      {/* Bootstrap */}
      {/* Moment */}
      {/* Date Range Picker */}
      {/* Datatable */}
      {/* Chart js */}
      {/* Main Custom JQuery */}
    </>
  );
}
