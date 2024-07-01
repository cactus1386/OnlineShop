import React from 'react';
import '../../font/font.css';
import '../../assets/css/Nav.css';
import { Button, FormControl, FormGroup, FormLabel, Modal, ModalFooter, Form } from 'react-bootstrap';
import { useState } from 'react';

function CWin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputStyle = { height: '50px' };
    const buttonStyle = {
        height: '3px',
        width: '7%',
        marginBottom: '1px',
        borderRadius: '1px'
    };

    return (
        <div className="navbar-icons">
            <a href="login" className="icon-link" variant="primary" onClick={handleShow}>
                <i className="icon">👤</i> حساب کاربری
            </a>

            <a href="cart" className="icon-link">
                <i className="icon">🛒</i> سبد خرید (0)
            </a>
        </div>
    );
}

export default CWin;
