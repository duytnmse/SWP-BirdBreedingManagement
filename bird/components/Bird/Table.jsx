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
        <th scope="col">Weight (g)</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>   
        <td><a href={`/bird/id`} >01 </a></td>
        <td>Chích chòe Than</td>
        <td>Trống</td>
        <td>08/09/2023</td>
        <td>300</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  )
}

export default Table