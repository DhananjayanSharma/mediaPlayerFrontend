import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteVideoApi } from '../services/allApi';

function VideoCard({ video, setDeleteVideoStatus,isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const caption = video?.caption
    const url = video?.embedeLink

    const time = new Date()
    const timeStamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
    console.log(timeStamp);
    const reqBody = {
      caption, url, timeStamp
    }
    const result = await addVideoHistory(reqBody)
    console.log(result);

  }
  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)

  }
  const videoDrag = (e, video) => {
    /*   console.log(typeof (id)); */
    console.log(video);
    /* console.log(`dragged video id is ${id}`); */
    e.dataTransfer.setData("videoDeatails", JSON.stringify(video))
  }
  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e) => videoDrag(e, video)} className='mt-4'>
       {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageURL} height={'300px'} />}
        <Card.Body>

          <div className='d-flex justify-content-between'>
            <Card.Text>{video?.caption}</Card.Text>
            {!isPresent &&<Button onClick={() => handleDelete(video?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}
          </div>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={`${video?.embedeLink}?autoplay=1`} title={video?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
