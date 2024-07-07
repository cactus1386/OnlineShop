import React, { useState, useEffect } from "react";
import Cart from './ProfileCart';
import RPP from './RecentlyPurchasedPrdcts';
import '../assets/css/Profile.css';

const UserInfo = () => {
  const [Infos, setInfos] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");

    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not authenticated');
      return;
    }

    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("X-CSRFToken", "yxhMJ4faNaieiMiAJ4AMlUdZvX7afyuNadVDGghFj2W7Pu35gSzvvRhWN1UYzo1G");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      const response = await fetch("http://94.183.74.154:1234/account/api/v1/profile/", requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setInfos(result);
    } catch (error) {
      setError('Failed to fetch user info');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
  }

  return (
    <div className='col-md-12'>
      <div className="d-flex justify-content-center col-md-12">
        <div className="col-md-9 bg-light border rounded border fontv" dir="rtl">
          <div className="pt-1 p-3 container">
            <div className="col-md-12 inline">
              <img src={Infos.image} alt="Profile" className="img" />
              <a className="h3">{Infos.name}</a>
            </div>
            <div className="mb-7">
              <div className="d-flex justify-content-between align-items-center pt-2">
                <span className="text-dark-75 font-weight-bolder mr-2">شماره همراه:</span>
                <a href="#" className="text-muted text-hover-primary">{Infos.phone}</a>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <span className="text-dark-75 font-weight-bolder mr-2">ایمیل:</span>
                <a href="#" className="text-muted text-hover-primary">{Infos.email}</a>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
                <span className="text-dark-75 font-weight-bolder mr-2">آدرس:</span>
                <span className="text-muted font-weight-bold">{Infos.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
      <RPP />
    </div>
  );
};

export default UserInfo;
