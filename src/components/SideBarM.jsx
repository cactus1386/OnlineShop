import React, { useState } from 'react';
import { Offcanvas, Nav, Accordion, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/SideBar.css';
import { MenuItem } from 'react-pro-sidebar';
import ListGroup from 'react-bootstrap/ListGroup';


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
            
            <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" >
      شلوارک
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
      اکسسوری
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
      پیراهن
    </button>
  </li>
        
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <i className="bi bi-gender-male me-2"></i> مردانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              
            
              <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" >
      تی شرت
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    شلوار
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    کت
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    ژاکت
    </button>
  </li>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <i className="bi bi-people me-2"></i> بچگانه
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" >
    تاپ
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    شلوارک
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    کفش
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    پیراهن
    </button>
  </li>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <i className="bi bi-sunglasses me-2"></i> اکسسوری
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" >
    کیف
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    جواهرات
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    ساعت
    </button>
  </li>
  <li className="list-group-item">
    <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" onClick={() => console.log('شلوارک کلیک شد')}>
    عینک
    </button>
  </li>
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
