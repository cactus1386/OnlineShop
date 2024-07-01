import img1 from '../assets/media/products/1.png'
import "../font/font.css"
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Plists(){
    const [Plist,setPlist]=useState([])

    useEffect(() => { 
        fetch("http://94.183.74.154:1234/api/v1/products/?category=1")
        .then(response => response.json())
        .then(result => setPlist(result.results))
        .catch(error => console.log('error', error));
      },[]);

return(
    <div className="users row justify-content-end">
      {Plist.map( c =>(<div className='col-md-3' >
        <a href="http://localhost:3000/">     
        <div class="container">    
            <div class="overlay-wrapper rounded bg-light text-center">
            <img src={img1} alt="" class="mw-100 w-200px" />
            </div>
                       
            <div class="overlay-layer fontv" dir="rtl">
                <h3 class="font-size-h3 col-md-3">{c.name}</h3>
                <h3 class="font-size-h3 col-md-3">{c.price}</h3>
            </div>
            
        </div>
        </a>
        </div>                           
))}
    </div>
  );
}  
export default Plists;