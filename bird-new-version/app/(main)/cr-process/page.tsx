import DropSelect from '@/components/Cr-Process/DropSelect'
import Table from '@/components/Cr-Process/Table'
import React from 'react'


const page = () => {
    return (
        <>
            <div id="main-wrapper" className="show">
                <div className="content-body">
                    <div className="warper container-fluid">
                        <div className="all-patients main_container">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-header fix-card">
                                            <div className="row">
                                                <div className="col-8">
                                                    <h4 className="card-title"> Chọn Lồng Phù Hợp </h4>
                                                </div>
                                                <DropSelect/>
                                            </div>                                          
                                        </div>                                       
                                        <Table/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>           
        </>
    )
}

export default page