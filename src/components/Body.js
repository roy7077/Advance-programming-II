import React from 'react'
import {array,DC,Heap,Greedy,trees,Backtracking,dp,graph } from '../conts.js/Data'
import BasicTable from './BasicTable'
import '../Style.css/body.css'

const Body = () => {
  return (
    <div>
     <div className='div-sagar'>
      <h1 className='heading' >ADVANCE  programming - II </h1>
      </div>

      {/* UNIT - 1 */}
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 1</h1>
      </div>
      <div className='div-sagar-1'>
      <h1 className='heading'>Arrays, Stacks, Queues and linked list</h1>
      </div>
      <BasicTable data={array}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Divide and conquer</h1>
      </div>
      <BasicTable data={DC}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Heap</h1>
      </div>
      <BasicTable data={Heap}/>
      
      {/* UNIT - 2 */}
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 2</h1>
      </div>
      <div className='div-sagar-1'>
      <h1 className='heading'>Greedy</h1>
      </div>
      <BasicTable data={Greedy}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Trees</h1>
      </div>
      <BasicTable data={trees}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Backtracking</h1>
      </div>
      <BasicTable data={Backtracking}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Graph</h1>
      </div>
      <BasicTable data={graph}/>


      <div className='div-sagar-1'>
      <h1 className='heading'>Dynammic programming</h1>
      </div>
      <BasicTable data={dp}/>
    </div>
  )
}

export default Body
