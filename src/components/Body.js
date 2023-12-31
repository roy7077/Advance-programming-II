import React from 'react'
import {chapter1,chapter2,chapter3,chapter4 } from '../conts.js/Data'
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
      <BasicTable data={chapter1}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Divide and conquer</h1>
      </div>
      <BasicTable data={chapter2}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Greedy</h1>
      </div>
      <BasicTable data={chapter3}/>
      
      {/* UNIT - 2 */}
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 2</h1>
      </div>
      <div className='div-sagar-1'>
      <h1 className='heading'>Trees</h1>
      </div>
      <BasicTable data={chapter4}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Backtracking</h1>
      </div>
      <BasicTable data={chapter2}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Dynamic Programming</h1>
      </div>
      <BasicTable data={chapter3}/>
    </div>
  )
}

export default Body
