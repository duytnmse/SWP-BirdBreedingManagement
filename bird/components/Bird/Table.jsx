import React from 'react'

const Table = () => {
  return (
    <div><table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Bird Type</th>
        <th scope="col">Sex</th>
        <th scope="col">Birthday</th>
        <th scope="col">Weight</th>
        
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