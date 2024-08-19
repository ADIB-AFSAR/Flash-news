import React from 'react'

function Footer() {
  return (
    <><div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
 
         </a>
        <span className="mb-3 mb-md-0 fw-bold text-body-secondary">© 2024 Flash News, Inc</span>
      </div>
      
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <p className='fire-text fw-bold'>ADIB AFSAR</p>
      <a href='https://github.com/ADIB-AFSAR/'><i className="bi bi-github mx-2"></i></a>
      <a href='mailto:afsaradib786@gmail.com'><i className="bi bi-google mx-2"></i></a>
        </ul>
    </footer>
  </div></>
  )
}

export default Footer