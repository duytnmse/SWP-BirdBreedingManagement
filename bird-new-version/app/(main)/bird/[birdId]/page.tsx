
import Profile from '@/components/BirdId/Profile'
import BreadScrum from '@/components/BreadScrum'

import React from 'react'

const page = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
          <BreadScrum title='Thông Tin Chích Chòe' subRouteTitle='bird' subTitle1='Tất Cả Chích Chòe' subTitle2='Thông Tin Chích Chòe'/>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page