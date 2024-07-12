import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/assets/css/Comment.css';

const Comments = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    show();
  }, [productId]);

  function show() {
    fetch(`http://94.183.74.154:1234/comments/api/v1/post?product=${productId}`)
      .then(response => response.json())
      .then(result => {
        setComments(result);
        setLoading(false);
      })
      .catch(error => console.log('Error fetching comments:', error));
  }

  function sendToServer() {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzE3NTAyLCJpYXQiOjE3MDgzMTE1MDIsImp0aSI6ImJjNzc1ODhmNTdkZjRjNmE5ZWJiYzQ3MzVlZjc1YzdjIiwidXNlcl9pZCI6MX0.mOLSO9XWA1q57tzaAG2LyxYpnSn1TQp4S0oOcp9iyCM");

    const raw = JSON.stringify({
      "content": comment,
      "name": name,
      "post": productId
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://94.183.74.154:1234/comments/api/v1/post", requestOptions)
      .then(response => response.text())
      .then(result => show())
      .catch(error => console.log('error', error));
  };

  return (
    <div className="d-flex justify-content-center col-md-12">
      <div className="col-md-12 p-3" dir="rtl">
        {isLoading ? (
          <div className="loadingPage">
            <div className="spinner spinner-dark mr-15 text-center loadingCenter"></div>
          </div>
        </div>
      )}</div>
      <div class="d-flex align-items-center">
      <div class=" col-md-10 rounded p-5 mb-9 d-flex align-items-center">
        <input type='text' id="1" onChange={e => setComment(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" ></input>
        <button onClick={sendToServer} class=" col-md-2 btn btn-primary font-weight-bold">ثبت</button>
      </div>
      </div>
      </div> : 
      <div>
      <div class='contain'>{Comments.map(c =>
        <div>
          <div class="mt-2 rounded p-5 border text-dark-50 font-weight-bold font-size-lg text-left max-w-1500px fontv">
              <div class="text-muted ">{c.name}:</div>
              <div class='h4'>{c.content}</div>
          </div>
        </div>
      )}</div>
        <div class="pt-4 ">
          <div class="pt-2 border-top border-dark">
            <div class='card '>
              <div class="d-flex justify-content-start ">
                <div class=" col-md-10 rounded p-3 d-flex align-items-center">
                  <input id="1" onChange={e => setName(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" placeholder="نام ونام خانوادگی:"/>
                </div>
              </div>
              <div class="d-flex justify-content-start ">
                <div class=" col-md-10 rounded p-3 d-flex align-items-center">
                  <input           
                  onKeyDown={(e) => { 
                      if (e.key === "Enter")
                        sendToServer();}}
                      id="2" onChange={e => setComment(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" placeholder="نظر شما:"/>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
