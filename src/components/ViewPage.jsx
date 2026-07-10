import React from 'react'
import NavigationBar from './NavigationBar'

const ViewPage = () => {
  return (
    <div>
        <NavigationBar />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Patient ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Doctor</th>
      <th scope="col">Room</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>34</td>
      <td>Male</td>
      <td>O+</td>
      <td>meera</td>
      <td>a010</td>
      <td>6573637263</td>
    </tr>
    
    
  </tbody>
</table>
    </div>
  )
}

export default ViewPage