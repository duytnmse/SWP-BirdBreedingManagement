import BabyBirdCard from '@/components/CageId/BabyBirdCard'
import BirdCard from '@/components/CageId/BirdCard'
import NotificationCard from '@/components/CageId/NotificationCard'
import ProcessCard from '@/components/CageId/ProcessCard'
import TabStaff from '@/components/CageId/TabStaff'
import Table from "@/components/Bird/Table";
import React from 'react'

const page = () => {
    return (
        <div className="content-body">
            <div className="warper container-fluid">
                <div className="main_container">
                    <div className="row page-titles mx-0">
                        <div className="col-sm-6 p-md-0">
                            <div className="welcome-text">
                                <h4 className="text-primary">Thông tin lồng </h4>
                            </div>
                        </div>
                        <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    <a href="/cage">Tất Cả Lồng</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    <a>Thông tin lồng</a>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <BirdCard />
                    <BirdCard />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="doctor-info-content">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item col-md-4" role="presentation">
                                        <button
                                            className="nav-link  active"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home"
                                            type="button"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Thông Tin Quá Trình
                                        </button>
                                    </li>
                                    <li className="nav-item col-md-4" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Chim non
                                        </button>
                                    </li>
                                    <li className="nav-item col-md-4" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#contact"
                                            type="button"
                                            role="tab"
                                            aria-controls="contact"
                                            aria-selected="false"
                                        >
                                            Nhân viên phụ trách
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="card m-t-30">
                                            <div className="card-body">
                                                <p>

                                                    <div className="flex justify-between items-center mb-2.5">
                                                        <label className='basis-[30%]'>SỐ TRỨNG ĐÃ ĐẺ :</label>
                                                        <div className="grow pl-2.5">6</div>
                                                    </div>

                                                    <div className="flex justify-between items-center mb-2.5">
                                                        <label className='basis-[30%]'>SỐ CHÍCH CHÒE :</label>
                                                        <div className="grow pl-2.5">5</div>
                                                    </div>

                                                    <div className="flex justify-between items-center mb-2.5">
                                                        <label className='basis-[30%]'>GIAI ĐOẠN HIỆN TẠI:</label>
                                                        <div className="grow pl-2.5">CHIM NON</div>
                                                    </div>

                                                    <div className="flex justify-between items-center mb-2.5">
                                                        <label className='basis-[30%]'>DỰ KIẾN GIAI ĐOẠN KẾ :</label>
                                                        <div className="grow pl-2.5">8/10/2023</div>
                                                    </div>
                                                    
                                                      <br />
                                                    
                                                     
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <div className="card m-t-30">
                                            <div className="card-body">
                                                <div className="row">
                                                    <BabyBirdCard />
                                                    <BabyBirdCard />
                                                    <BabyBirdCard />
                                                    <BabyBirdCard />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="contact"
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                    >
                                        <TabStaff />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow">
                                <div className="card-header fix-card">
                                    <div className="row">
                                        <div className="col-8">
                                            <h4 className="card-title">Danh sách chim </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="container"><Table /></div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        {/* table here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <NotificationCard />
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <ProcessCard />
                        </div>
                     
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page