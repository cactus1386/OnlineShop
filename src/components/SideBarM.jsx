import React, { useState } from 'react';
import { Offcanvas, Nav, Accordion, ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/SideBar.css';
import { MenuItem } from 'react-pro-sidebar';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleItemHover = (category) => {
    setHoveredItem(category);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  
  return (
    <div dir='rtl' className="sidebar-container">
      <Nav.Link variant="success" onClick={handleShow}>
        لیست محصولات<i className="bi bi-caret-down"></i>
      </Nav.Link>

      <Offcanvas show={show} onHide={handleClose} placement='end' backdropClassName='blur frame'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text1'>
            <i className="bi bi-search-heart"></i> دنبال چه هستید؟
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar d-flex flex-column p-3 bg-light">
            <h2 className="mb-4 fontv text" dir='rtl'>لیست محصولات</h2>
            <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi-gender-female me-2"></i> زنانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
            <Button>jhgb</Button>
              <ListGroup.Item>شلوارک</ListGroup.Item>
              <ListGroup.Item>پیراهن</ListGroup.Item>
              <ListGroup.Item>اکسسوری</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
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
        <Accordion.Item eventKey="2">
          <Accordion.Header>
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
        <Accordion.Item eventKey="3">
          <Accordion.Header>
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
