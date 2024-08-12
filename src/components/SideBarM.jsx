import React, { useState, useEffect } from 'react';
import { Offcanvas, Nav, Accordion, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/SideBar.css';
import '../font/font.css';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories'); 
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

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
            <h2 className="mb-4 fontv text" dir='rtl' style={{ textShadow: '2px 3px 1px rgba(0, 128, 0, 0.7)' }}>لیست محصولات</h2>
            <Accordion>
              {categories.map(category => (
                <Accordion.Item key={category.id} eventKey={category.id.toString()}>
                  <Accordion.Header className='fontv'>
                    <i className={`bi bi-${category.icon} me-2`}></i> {category.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      {category.items.map((item) => (
                        
                        <li className="list-group-item" key={item.id}>
                        <button className="btn btn-link p-0 m-0 border-0 text-decoration-none" >
{item}
                        </button>
                      </li>
                      ))}
                    </ListGroup>
                  </Accordion.Body>
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
