import React from 'react'
import UserData from './UserData'
import '../Style.css/tables.css'

const BasicTable = ({data}) => {
  return (
    <div className='.table-container'>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Problem Name</th>
                    <th>Problem Link</th>
                    <th>Code</th>
                    {/* <th>Viedo Solution</th> */}
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
