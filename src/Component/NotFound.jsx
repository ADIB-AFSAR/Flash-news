import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className='notFound'>
    <h1 className='title' style={{height:'90vh' , fontVariant:'all-small-caps'}}><i className="bi bi-plug-fill"></i>PAGE NOT FOUND<p><Link to={'/'}>Click to go home</Link></p></h1>   
  </div>
    </>
  )
}

export default NotFound