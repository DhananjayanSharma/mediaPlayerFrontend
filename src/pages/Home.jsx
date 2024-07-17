import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const [addVideoStatus,setAddVideoStatus]=useState([])
  const [dragOut,setDragOut] =useState(false)
  return (
    <>
      <div className='d-flex'>
        <Add  setAddVideoStatus={setAddVideoStatus}/>
        <h5 className='ms-auto p-5'><Link to={'/Watchhistory'} style={{textDecoration:'none'}}><span className='hide'> Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
      </div>
      <div className='row w-100 p-4'>
        <div className='col-md-9'>
          <View addVideoStatus={addVideoStatus} setDragOut={setDragOut} />
        </div>
        <div className='col-md-3 p-4'>
          <Category setDragOut={setDragOut} dragOut={dragOut} />
        </div>
      </div>
    </>
  )
}
export default Home
