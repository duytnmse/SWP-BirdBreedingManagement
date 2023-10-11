import React from 'react'
import BirdChild from '../BirdFamilyTree/BirdChild'
import MainGeneration from '../BirdFamilyTree/MainGeneration'
import Parent from '../BirdFamilyTree/Parent'


const Profile = () => {
  return (

    <div className="card">
      <div className="card-header">
        <h4 className="card-title ">Thông tin</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form>
            <div className="row">

              <div className="image col-xl-4">
                <div className="form-group row widget-3">
                  
                    <div className="form-input">
                      <label
                        className="labeltest"
                        htmlFor="file-ip-1"
                      >
                        <span>
                          {" "}
                          ... {" "}
                        </span>
                      </label>
                      <input
                        type="file"
                        id="file-ip-1"
                        accept="image/*"
                        // ?\\onchange="showPreview(event);"
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


              <div className="col-xl-8 ">
                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>ID:</label>
                  <div className="grow pl-2.5">A01</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Bird Type:</label>
                  <div className="grow pl-2.5">Chích Chòe Than</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Sex:</label>
                  <div className="grow pl-2.5">Trống</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Date Of Birth:</label>
                  <div className="grow pl-2.5">08/09/2023</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Father Id:</label>
                  <div className="grow pl-2.5">A02</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Mother Id:</label>
                  <div className="grow pl-2.5">A03</div>
                </div>
                
                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Cage Id:</label>
                  <div className="grow pl-2.5">B01</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Range:</label>
                  <div className="grow pl-2.5">Trưởng Thành</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Mutation(%):</label>
                  <div className="grow pl-2.5">5</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className='basis-[30%]'>Weight(g):</label>
                  <div className="grow pl-2.5">300</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card-footer ">
        <h3 className="card-title" style={{ color : "red" }}>Sơ đồ phả hệ ( Family Tree )</h3>
              <div style={{display :"flex" , alignItems : "center"}}>
    <p>This is the first paragraph.</p>
    <hr style={{ display: "flex", borderTop: "3px dashed black", margin : "0 10px", width: "10%" }}/>
    <p style={{ marginRight: "800px" }}>This is the second paragraph.</p>
          </div>
  <div>
    <div style={{ borderLeft : "1px solid black", height: "5vh", marginLeft : "170px" }} />
    <div style={{display :"flex" , alignItems : "center"}}>
      <p style={{ marginLeft: "150px" }}>SIUUUU</p>
      <hr style={{ display: "flex", borderTop: "3px dashed black", margin : "0 10px", width: "20%" }}  />
      <p style={{ marginRight: "800px" }}>SIUUUU</p>
    </div>
    <div style={{ borderLeft : "1px solid black", height: "5vh", marginLeft : "250px" }} />
    <p style={{ marginLeft: "225px" }}>SIUUUU</p>
  </div>

      </div>

      <div className="row">

                        <div className="col-md-6 col-lg-4">
                            <Parent />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <MainGeneration />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <BirdChild />
                        </div>  
                    </div>
            </div>
    
  )
}

export default Profile