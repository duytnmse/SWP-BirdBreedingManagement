import React from 'react'

const CageDiagramItem = () => {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="timeline-panel card p-4 mb-4">
                <div className="media">
                    <img
                        alt="image"
                        src="https://via.placeholder.com/90/f8f8f8/2b2b2b"
                    />
                </div>
                <div className="media-body">
                    <a href="#">
                        <h4 className="mb-2">Dr. Michael Sullivan</h4>
                    </a>
                    <p className="mb-2">Endocrinologist</p>
                    <div className="star-review">
                        <i className="fa fa-crow text-orange" />
                        <i className="fa fa-crow text-orange" />
                        <i className="fa fa-crow text-orange" />
                        <i className="fa fa-crow text-gray" />
                        <i className="fa fa-egg text-gray" />
                    </div>
                </div>
                <div className="btn-group-style-1">
                    <div className="btn-content">
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-ellipsis-v" />
                        </button>
                        <div className="dropdown-menu">
                            <div className="form-content">
                                <a href="#">
                                    <span className="ml-2">View Profile</span>
                                </a>
                                <a href="#">
                                    <span className="ml-2">Edit</span>
                                </a>
                                <a href="#">
                                    <span className="ml-2">Delete </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CageDiagramItem