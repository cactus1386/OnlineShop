import React from 'react'
import '../../font/font.css'
import '../../assets/css/Nav.css'
import { Button, FormControl, FormGroup, FormLabel, Modal, ModalFooter, Form } from 'react-bootstrap';
import { useState } from 'react';
import { height, margin, width } from '@mui/system';


function CWin(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputStyle = {  height: '50px'}
    const buttonn = {height: '37px',
        width: '100%',
        marginBottom: '15px',
        borderRadius: '1px'
        
        
    }

    return(     
 <div className="navbar-icons " >
			<a href="#account" className="icon-link " variant="primary" onClick={handleShow}><i className="icon ">👤</i>حساب کاربری</a>
            <Modal dir='rtl' show={show} onHide={handleClose} dialogClassName="custom-modal " centered >
                <Modal.Header >
                    <Modal.Title>
ورود به حساب کاربری                    </Modal.Title>
                    <i class="bi bi-x-lg text-right size-icon-check" onClick={handleClose} ></i>
                </Modal.Header>
                <Modal.Body>
                    <Form dir='rtl'>
                       <FormGroup controlId='formBasicEmail' className='text-right'>
                        <FormLabel ><h5>ایمیل</h5></FormLabel>
                        <FormControl type='email' placeholder='ایمیل خود را وارد کنید' style={inputStyle}></FormControl>
                       </FormGroup>

                       <FormGroup controlId="formBasicPassword" className="mt-3 text-right">
              <FormLabel><h5>رمز عبور</h5></FormLabel>
              <FormControl type="password" placeholder="رمز عبور خود را وارد کنید" style={inputStyle} />
            </FormGroup>
<div className='text-right' style={buttonn}>
            <Button  type='submit' className='mt-3 bg-success' style={buttonn
            }  >
            لاگ این
            </Button></div>
                    </Form>
                </Modal.Body>
                  <ModalFooter>
                    <div className='textt'>  <h5> حساب کاربری ندارید؟ ثبت نام کنید </h5> 
              </div>
    </ModalFooter>
                

            </Modal>

		<a href="cart" className="icon-link"><i className="icon">🛒</i> سبد خرید (0)</a>
	  </div>
       
    );

}

export default CWin;