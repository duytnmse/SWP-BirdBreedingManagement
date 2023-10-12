
import BreadScrum from '@/components/BreadScrum'

import Profile from '@/components/StaffId/Profile'
import React from 'react'

const page = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
          <BreadScrum title='Thông Tin Nhân Viên' subRouteTitle='staff' subTitle1='Tất Cả Nhân Viên' subTitle2='Thông Tin Nhân Viên'/>
            <Profile/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page