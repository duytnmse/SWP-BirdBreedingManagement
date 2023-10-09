import PageTitle from '@/components/AddStaff/PageTitle'
import StaffProfile from '@/components/AddStaff/StaffProfile'
import React from 'react'

const AddStaffPage = () => {
    return (
        <div id="main-wrapper" className="show">
            <div className="content-body">
                <div className="warper container-fluid">
                    <div className="new-patients main_container">
                        <PageTitle />
                        <div className="row">
                            <div className="col-md-12">
                                <StaffProfile />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Medical Information</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="basic-form">
                                            <form>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                Main specialization
                                                            </label>
                                                            <select className="form-control form-select">
                                                                <option>Type 1 Diabetes</option>
                                                                <option>Multiple Sclerosis</option>
                                                                <option>Rheumatoid Arthritis</option>
                                                                <option>Allergies &amp; Asthma</option>
                                                            </select>
                                                            <div className="col-lg-12"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                Secondary specialization
                                                            </label>
                                                            <select className="form-control form-select">
                                                                <option>Secondary specialization</option>
                                                                <option>Celiac Disease</option>
                                                                <option>cancer</option>
                                                                <option>Catarrh</option>
                                                                <option>Conjunctivitis</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                {" "}
                                                                Medical Education{" "}
                                                            </label>
                                                            <select className="form-control form-select">
                                                                <option>Medical University</option>
                                                                <option>Medical College</option>
                                                                <option>Nurse School</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Period</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Period"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group text-right">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary float-end "
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section content */}

        </div>
    )
}

export default AddStaffPage