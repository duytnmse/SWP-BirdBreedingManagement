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
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  )
}

export default Table