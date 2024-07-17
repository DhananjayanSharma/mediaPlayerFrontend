import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setAddVideoStatus }) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideodetails] = useState({
    caption: "",
    imageURL: "",
    embedeLink: ""
  })
  console.log(videoDetails);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink = (e) => {
    const link = e.target.value
    console.log(link);
    if (link.startsWith("https://youtu.be/")) {

      setVideodetails({ ...videoDetails, embedeLink: `https://www.youtube.com/embed/${link.slice(17, 28)}` })
    }
    else {
      setVideodetails({ ...videoDetails, embedeLink: `https://www.youtube.com/embed/${link.slice(-11)}` })

    }
  }

  /* <iframe width="996" height="560" src="https://www.youtube.com/embed/qxbHtcfHq2s?list=RDqxbHtcfHq2s" title="SOOSEKI Lyrical Video | Pushpa 2 The Rule | Allu Arjun | Rashmika | Shreya Ghoshal | Sukumar| DSP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */

  const handleUpload = async (e) => {
    e.preventDefault()
    const { caption, imageURL, embedeLink } = videoDetails
    if (!caption || !imageURL || !embedeLink) {
      toast.info('please fill the form completely')
    }
    else {
      const result = await allVideoApi(videoDetails)

      if (result.status >= 200 && result.status < 300) {
        toast.success('video added successfully')
        handleClose()
        setAddVideoStatus(result.data)
      }
      else {
        toast.error(' something went wrong')
        console.log(result);
      }
    }
  }

  return (
    <>
      <div className='d-flex align-items-center p-5'>
        <h5>Upload new video</h5>
        <button onClick={handleShow} className='btn fs-5 '><FontAwesomeIcon icon={faUpload} /></button>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} />  Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded'>
            <div className='mb-3'>
              <input type="text" className='form-control' placeholder='Video Caption' onChange={(e) => setVideodetails({ ...videoDetails, caption: e.target.value })} />
            </div>
            <div className='mb-3'>
              <input type="text" className='form-control' placeholder='Video Image' onChange={(e) => setVideodetails({ ...videoDetails, imageURL: e.target.value })} />
            </div>
            <div className='mb-3'>
              <input type="text" className='form-control' placeholder='Video Url' onChange={(e) => getLink(e)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Add
