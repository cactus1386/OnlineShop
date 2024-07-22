import React, { useState } from 'react';
import { Offcanvas, Nav, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/SideBar.css';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleItemHover = (category) => {
    setHoveredItem(category);
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
            <Accordion className='fontv'>
              {['زنانه', 'مردانه', 'بچگانه', 'اکسسوری'].map((category, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="accordion-item">
                  <Accordion.Header
                    onMouseEnter={() => handleItemHover(category)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <i className={`bi bi-gender-${category === 'زنانه' ? 'female' : category === 'مردانه' ? 'male' : 'people'} me-2`}></i>
                    {category}
                  </Accordion.Header>
                  <div className={`mega-menu-content ${hoveredItem === category ? '' : 'hidden'}`}>
                    <div className="row">
                      <div className="col-md-12">
                        <h6 className="dropdown-header">Category {index + 1}</h6>
                        <div className="content">
                          {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map(item => (
                            <a
                              key={item}
                              className="dropdown-item"
                              href="#"
                              onClick={() => alert(`شما ${item} را انتخاب کردید!`)}
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
