import React from 'react'
import { useState } from 'react';
import './headers/InvoiceHeader.js';
import '../font/font.css'

function RPP() {
	const [state,setState]=useState([
        {Id:'1',Name : "نیکه ترو بالانث", Price:'455,000' ,Amount : '69',Date: "05/28/2020", PaymentStatus:'پرداخت شده',PriceSum :'959,934,000'},
      ])
    return(<>
		<div class='d-flex justify-content-center pt-5 fontv'>
					<div class="card card-custom col-md-9 " dir='rtl'>
						<div class="card-header border-0 pt-2">
							<h4 class="card-title align-items-center flex-column">
								<span class="card-label font-weight-bolder text-dark"> لیست سفارشات قبلی</span>
							</h4>
						</div>
						<div class="card-body py-0">
							<div class="table-responsive">
								<table class="table table-sm table-bordered table-hover table-vertical-center" id="kt_advance_table_widget_4">
									<thead>
										<tr class="text-left">
											<th class="pl-0" style={{width: 30+'px'}}>
											</th>
											<th class="pl-0" style={{'min-width': 120+"px"}}>نام</th>
											<th style={{'min-width':110+"px"}} >تعداد</th>
											<th style={{'min-width':110+"px"}} > قیمت کل</th>
											
										</tr>
									</thead>
									<tbody>
									{state.map(c=>
										<tr>
											<td class="pl-0 py-6">
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg">{c.Id}</span>
											</td>
											<td class="pl-0">
												<a href="product" class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">{c.Name}</a>
											</td>
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg">{c.Amount}</span>
											</td>
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg">{c.PriceSum}</span>
												<span class="text-muted font-weight-bold">تومان</span>
											</td>
										

											
										</tr>)	}
									
									
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
                
                </>

    )
    
}
export default RPP;





{/* <div class="symbol symbol-150 mr-3">
<img alt="Pic" src="assets/media/users/300_25.jpg" />
</div> */}