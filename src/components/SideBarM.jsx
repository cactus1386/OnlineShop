// این ساید بار قراره این جوری باشه که تو توی نوبار رو محصولات که زدی
// مثلا محصولات الکترونیک رو که زدی, توی ساید بار گزینه های محصولات الکترونیک نمایش داده بشه

import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/SideBar.css'
import '../font/font.css'


const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-light">
      <h2 className="mb-4">لیست محصولات</h2>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
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
  );
};

export default Sidebar;


// {/* <div className="App">
// <ShoppingNavbar />
// </div>

// <div className="App">
// <Sidebar />
// <div className="content p-4" style={{ paddingTop: '120px', padding: '100px' }}>
//   <h1>خوش آمدید دنبال چه هستید</h1>
//   <p>به جدید ترین تخفیف ها و جشنواره های ما سر بزنید</p>
//   {/* Add more content here */}
// </div>
// </div> */}