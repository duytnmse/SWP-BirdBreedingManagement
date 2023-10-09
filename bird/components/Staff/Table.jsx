import React from 'react'

const Table = () => {
  return (
    <div><table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">UserName</th>
        <th scope="col">Email</th>
        <th scope="col">FullName</th>
        <th scope="col">RoleID</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
      <th ><a href='/staff/id'>001</a></th>
        <td>MinhLu</td>
        <td>Minhlu@gmail.com</td>
        <td>Hoàng Minh Lu</td>
        <td>Nhân viên</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  )
}

export default Table