import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, ListGroup } from 'react-bootstrap';
import '../assets/css/SideBar.css'

import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);

  };
  const handleShow = () => {
    setShow(true);

  };

  return (
    <div dir='rtl'>
     
      <Nav.Link variant="success" onClick={handleShow}  >
        لیست محصولات<i class="bi bi-caret-down"></i>
      </Nav.Link>

      <Offcanvas show={show} onHide={handleClose} placement='end' backdropClassName='blur frame'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text1' >   <i class="bi bi-search-heart"></i > دنبال چه هستید؟ </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add your sidebar content here */}
          <div className="sidebar d-flex flex-column p-3 bg-light">
      <h2 className="mb-4 fontv text" dir='rtl'>لیست محصولات</h2>
      <Accordion className='fontv'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='fontv'>
            <i className="bi bi-gender-female me-2"></i> زنانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>تاپ</ListGroup.Item>
              <ListGroup.Item>شلوارک</ListGroup.Item>
              <ListGroup.Item>پیراهن</ListGroup.Item>
              <ListGroup.Item>اکسسوری</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" >
          <Accordion.Header className='fontv'>
            <i className="bi bi-gender-male me-2"></i> مردانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>تی شرت</ListGroup.Item>
              <ListGroup.Item>شلوار</ListGroup.Item>
              <ListGroup.Item>ژاکت</ListGroup.Item>
              <ListGroup.Item>کت</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" >
          <Accordion.Header className='fontv'>
            <i className="bi bi-people me-2"></i> بچگانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>تاپ</ListGroup.Item>
              <ListGroup.Item>شلوارک</ListGroup.Item>
              <ListGroup.Item>کفش</ListGroup.Item>
              <ListGroup.Item>پیراهن</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" >
          <Accordion.Header className='fontv'>
            <i className="bi bi-sunglasses me-2"></i> اکسسوری
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>کیف</ListGroup.Item>
              <ListGroup.Item>جواهرات</ListGroup.Item>
              <ListGroup.Item>ساعت</ListGroup.Item>
              <ListGroup.Item>عینک</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;