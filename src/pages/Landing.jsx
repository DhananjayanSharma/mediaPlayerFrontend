import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Row>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h2>Welcome to <span className='text-warning'> Media player</span></h2>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat tenetur voluptatibus maiores dolorum ad consequuntur a dolorem hic, aliquam nam cumque voluptas ex cum, beatae, adipisci corrupti expedita quidem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, a! Accusamus, debitis. Error eligendi repellendus sed animi ullam, aspernatur asperiores libero maxime perferendis, optio, possimus omnis cupiditate culpa dolor. Fugiat?
          </p>
          <Link to={'/Home'}><button className='btn btn-warning'>Get started</button></Link>

        </Col>

        <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
          <img src="https://media.giphy.com/media/4ekAwWyOHrbIk/giphy.gif" alt="" className='w-75' />


        </Col>
        <Col md={1}></Col>
      </Row>



      <div className='container'>
        <h2 className='text-center my-5 '>Features</h2>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='px-md-5'>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.9c7daa97412b3c74df9bb508c253427e?rik=KeiMPlE7Nt6loA&riu=http%3a%2f%2fs.myniceprofile.com%2fmyspacepic%2f2064%2f206468.gif&ehk=pI12G7A10CoiTFVOIJVfYVFHQmfWapKFkSW5TIpUfZM%3d&risl=&pid=ImgRaw&r=0" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>


          <Col md={1}></Col>
        </Row>
      </div>




      <div className='comtainer-fluid mt-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10 border border-secondary p-3 border-2 rounded'>
            <div className='row p-4'>
              <div className='col-md-6'>
                <h3 className='text-warning'> Simple Fast And Powerful</h3>
                <p className='mt-5'><span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo eum officia quas eaque deleniti quod quae doloribus excepturi tempore, incidunt saepe, perferendis omnis fuga facilis repellendus enim alias consequatur.</p>
                <p className='mt-5'><span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo eum officia quas eaque deleniti quod quae doloribus excepturi tempore, incidunt saepe, perferendis omnis fuga facilis repellendus enim alias consequatur.</p>
                <p className='mt-5'><span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo eum officia quas eaque deleniti quod quae doloribus excepturi tempore, incidunt saepe, perferendis omnis fuga facilis repellendus enim alias consequatur.</p>
                
              </div>
              <div className='col-md-6'>
              <iframe className='p-2' width="100%" height="450" src="https://www.youtube.com/embed/fO9xunnaEVc" title="Apsraa | Jaani Ft Asees Kaur | Arvindr Khaira | Desi Melodies | Latest Punjabi Songs 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>

      </div>
    </>
  )
}

export default Landing
