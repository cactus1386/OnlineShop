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
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => { throw new Error(error.message); });
        }
        return response.json();
      })
      .then(result => {
        setComment('');
        setName('');
        show();
      })
      .catch(error => {
        console.log('Error posting comment:', error);
        setLoading(false);
      });
  }

  return (
    <div className="d-flex justify-content-center col-md-12">
      <div className="col-md-12 p-3" dir="rtl">
        {isLoading ? (
          <div className="loadingPage">
            <div className="spinner spinner-dark mr-15 text-center loadingCenter"></div>
          </div>
        ) : (
          <div>
            <div className="contain">
              {comments.map((c, index) => (
                <div key={index} class="border-bottom border-top p-3">
                  <div className="mt-2 text-dark-50 font-weight-bold font-size-lg text-left max-w-1500px fontv">
                    <div className="text-muted">{c.name}:</div>
                    <div className="h4">{c.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <div className="pt-2 border-top border-dark">
                <div className="">
                  <div className="d-flex justify-content-start">
                    <div className="col-md-10 p-3 d-flex align-items-center">
                      <input
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="form-control form-control-solid form-control-lg col-md-2"
                        placeholder="نام و نام خانوادگی:"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="col-md-10 rounded p-3 d-flex align-items-center">
                      <input
                        id="comment"
                        value={comment}
                        onKeyDown={e => { if (e.key === "Enter") sendToServer(); }}
                        onChange={e => setComment(e.target.value)}
                        className="form-control form-control-solid form-control-lg col-md-2"
                        placeholder="نظر شما:"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end p-2">
                    <button
                      onClick={sendToServer}
                      className="col-md-4 btn btn-lg btn-primary font-weight-bold">
                      ثبت
                    </button>
                  </div>
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
