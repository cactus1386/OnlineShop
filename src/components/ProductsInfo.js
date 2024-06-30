import { setState, useState } from 'react';
import img1 from '../assets/media/products/1.png';
import "../font/font.css"
import Album from './Album';
import Test from './Album';

function PI(){

   const [lst,setLst]=useState([{title:'sa@t',img:img1},
   {title:'sa@t',img:img1}, {title:'sa@t',img:img1}, {title:'sa@t',img:img1}, {title:'sa@t',img:img1}])
   
   const [list,setList]=useState([{title:'sa@t',img:img1},
   {title:'sa@t',img:img1}, {title:'sa@t',img:img1}, {title:'sa@t',img:img1}, {title:'sa@t',img:img1}])
   ;

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("X-CSRFToken", "LopoyLTldS9kwLAMb4XiU7gHt9ViIvIryGv1sLNkViLNYrddjbgGMZHSGWxMgGo8");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    const[State,setState]=useState({})


    fetch("http://94.183.74.154:1234/api/v1/products/2/", requestOptions)
      .then((response) => response.json())
      .then((result) => setState(result))
      .catch((error) => console.error(error));

    return(
        <div className='users row '>
        
        <div class='col-md-3' dir="rtl">
<div class="card card-custom gutter-b">
 <div class="card-header">
  <div class="card-title" dir='rtl'>
   <h3 class="card-label" >
    فروشنده 
   </h3>

  </div>
 </div>
<div class="card-body" dir='rtl'>
 فلانی

</div>
<div>
<div class="">

  <div class="card-title card-header text-left">

        {State.price}
        
    <small>تومان</small>
   
  </div>

</div>
</div>
<button type="button" class="btn btn-outline-success col-md-10 m-4">افزودن به سبد خرید</button>



</div>
</div>

<div class='col-md-4' dir="rtl">
<div class="card card-custom gutter-b">
 <div class="card-header">
  <div class="card-title" dir='rtl'>
   <h3 class="card-label" >
    
    <small>ساعت هوشمند اپل مدل Series 9 Aluminum 45mm</small>
   </h3>
  </div>
 </div>
 <div class="form-group row m-3">
        <label class="col-3 col-form-label">رنگ:</label>
        <div class="col-9 col-form-label">
            <div class="radio-inline">
                <label class="radio radio-outline radio-outline-2x radio-primary">
                    <input type="radio" name="radios16"/>
                    <span></span>
                    سفید
                </label>
                <label class="radio radio-outline radio-outline-2x radio-primary">
                    <input type="radio" name="radios16"/>
                    <span></span>
                    سیاه
                </label>
                <label class="radio radio-outline radio-outline-2x radio-primary">
                    <input type="radio" name="radios16"/>
                    <span></span>
                    نقره ای
                </label>
                <label class="radio radio-outline radio-outline-2x radio-primary">
                    <input type="radio" name="radios16"/>
                    <span></span>
                    بنفش
                </label>
            </div>
        </div>
    </div>
 <div class="card-body">
 yvbygbyibguiygvyugvcl dbbbbbbbbyogwwoygviybajkfdclnjsnurvnuiwhruiguioahrnvujbslyb yisgbyoirgyiwgbvybyhabv
 <form class="form">
</form>
 </div>
</div>
</div>
<div class='col-md-5' dir="rtl">
<div class="card card-custom gutter-b">
 <div class="card-header">
  <div class="card-title" dir='rtl'>
   <h3 class="card-label" >
   <img src={img1} alt="" class="mw-100 w-500px" />
    <small></small>
   </h3>
  </div>
  <div></div>
 </div>
 <div class="card-body" > 
        <Test items={lst}/>
 </div>
</div>
</div>
<div class="col-md-12">
<div class="card card-custom gutter-b">
 <div class="card-header">
  <div class="card-title" dir='rtl'>
   <h3 class="card-label">
    محصولات مرتبط
   </h3>
        <Album items={list}/>
  </div>
 </div>
 <div class="card-body">
 </div>
</div>
</div>
</div>
        
    )
}

export default PI;