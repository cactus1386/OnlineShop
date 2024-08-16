import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../assets/css/ProductInfo.css';
import "../font/font.css";
import '../assets/css/General.css';
import Comment from './CommentBox'; 
import Mortabet from './MultiItemSlider';
import img1 from '../assets/media/products/1.png';
import img2 from '../assets/media/products/2.png';
import img3 from '../assets/media/products/4.png';
import img4 from '../assets/media/products/3.png';

function PI() {
    const [IMG, setIMG] = useState([]);
    const [product, setProduct] = useState({ colors: [] });
    const location = useLocation();
    const [id, setId] = useState('');
    const [isChecked, setIsChecked] = React.useState(false);

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("X-CSRFToken", "tc6gv0BlCSEVzaDY2DEUFDyvHxAouuuWnjsAM5wngQp4psjqQKsZfKhJ0eopXCA7");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const paramId = searchParams.get('id');
        if (paramId) {
            setId(paramId);
        }
    }, [location.search]);

    useEffect(() => {
        if (id) {
            fetch("http://94.183.74.154:1234/api/v1/products/" + id, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setProduct(result);setIMG(result.images);console.log(IMG);
                })
                .catch((error) => console.error(error));
        }
    }, [id]);

    return (
        <div className='users fontv'>
            <div className="row col-md-12" dir="rtl">
                <div className="col-md-1 d-flex justify-content-end pt-5">
                    <div className="sideImgContainer">
                        {IMG.map((w, index) => (
                            <img key={index} src={w.image} className='sideImg border-dark border-bottom ' />
                        ))}
                    </div>
                </div>
                <div className="pb-5 col-md-5" dir="rtl">
                    <div className="border-bottom p-2 h1">
                        {product.name}
                    </div>
                    <div className='card bg-light' dir="rtl">
                        <div>
                            <div className="d-flex justify-content-end">
                                <a className='border border-danger text-danger rounded-circle p-2'>{product.discount}%</a>
                            </div>
                            <div>
                                <div className="container-xxl">
                                    <Carousel>
                                        {IMG.map((c, index) => (
                                            <Carousel.Item key={index}>
                                                <a class="link"><img class="d-block w-100 contrast sliderImg" src={c.image} alt={product.name} /></a>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pt-5">
                    <div className="" dir="rtl">
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>قیمت:</h4><h6 class="text-muted">(تومان)</h6>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.price}</h5>
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>سایز ها:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.size}</h5>
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>رنگ:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            {product.colors.map((c, index) => (
                                <div key={index} className="radio-inline">
                                    <label className="radio radio-outline radio-outline-2x radio-primary">
                                        <input type="radio" name="radios16" />
                                        <span></span>
                                        {c.color}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>جنس:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.material}</h5>
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>توضیحات:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.description}</h5>
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>برند:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.brand}</h5>
                        </div>
                        <div className="border-bottom p-3 col-md-12 card-title">
                            <h4>موجودی:</h4>
                        </div>
                        <div className="card-body d-flex justify-content-end">
                            <h5>{product.count}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-success col-md-9 m-4">
                                <h4>افزودن به سبد خرید</h4>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 pt-5">
                    <Comment productId={product.id} />
                </div>
                <div className="col-md-12">
                    <div className="card card-custom gutter-b">
                        <div className="card-header">
                            <div className="card-title" dir='rtl'>
                                <div className="card-label p-3 h1">محصولات مرتبط</div>
                                <Mortabet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PI;