import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='row w-100 p-5'>
        <div className="col-md-4">
          <h3 className='text-warning mb-4' ><FontAwesomeIcon icon={faVideo} className='me-3' />MediaPlayer</h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem quos debitis eos numquam illum nobis, ullam facere minima dolores sit! Eius accusamus culpa eos iure non a quis quae?</p>
        </div>
        <div className='col-md-1'></div>
        <div className="col-md-2 ">
          <h4 className='mb-4'>Links</h4>
          <div>
            <Link to={'/'}><p>Landing Page</p></Link>
            <Link to={'/Home'}> <p>home</p></Link>
            <Link to={'/Watchhistory'}><p>watchhistory</p></Link>
          </div>
        </div>
        <div className="col-md-2">
          <h4 className='mb-4'>Guides</h4>
          <div>
            <p>React</p>
            <p>react bootxtrap</p>
            <p>bootswatch</p>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div >
            <h4>Contact Us</h4>
            <div className='d-flex mt-4'>
              <input type="text" className='form-control' placeholder='Email Id' />
              <button className='btn btn-primary ms-4 '>subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'  >
              <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
              <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
              <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
