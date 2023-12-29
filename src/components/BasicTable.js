import React from 'react'
import UserData from './UserData'
import '../App.css'
const BasicTable = ({data}) => {
  return (
    <div className='.table-container'>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Problem Name</th>
                    <th>Code</th>
                    <th>Viedo solution</th>
                </tr>
            </thead>
            <tbody>
                <UserData users={data}/>
            </tbody>

        </table>    
    </div>
  )
}

export default BasicTable
