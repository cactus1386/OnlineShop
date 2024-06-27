import React from 'react'
import './headers/InvoiceHeader.js';
import Iheader from './headers/InvoiceHeader.js';
import '../font/font.css'

import BasicPopover from './Featuress/Popover.js';
// ال آی قراره کارد درست کنی وقتی دکمه ی مشخصات رو زدی یه کارد باز بشه و مشخصات محصول رو نشون بدهو اینکخه از قسمت سیمبل ها اون پایین هم 
// تگ کردی قراره عکست اون دستور باشه
function RPP() {
    return(
		<div class="card card-custom gutter-b pr-7 mt-5 ml-10 mr-10 text-right fontv" dir='rtl'>
											<div class="card-body p-0">
        <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
			
													<div class="col-md-10"><Iheader></Iheader>
														<div class="table-responsive">
														
															<table class="table">
																<thead>
																	<tr>
																		<th class="pl-0 font-weight-bold text-muted text-uppercase">سفارشات</th>
																		<th class="text-right font-weight-bold text-muted text-uppercase">تعداد</th>
																		<th class="text-right font-weight-bold text-muted text-uppercase">قیمت هرکدام</th>
																		<th class="text-right pr-0 font-weight-bold text-muted text-uppercase">قیمت کل</th>
																	</tr>
																</thead>
																<tbody>
																	<tr class="font-weight-boldest">
																		<td class="border-0 pl-0 pt-7 d-flex align-items-center">
																	
																		<div class="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
																			<div class="symbol-label" style={{backgroundImage: "url(" + "assets/media/products/11.png" + ")"}}></div>
																		</div>
																	
																		پیراهن</td>
																		<td class="text-right pt-7 align-middle">2</td>
																		<td class="text-right pt-7 align-middle">$90.00</td>
																		<td class="text-primary pr-0 pt-7 text-right align-middle">$180.00</td>
																		<BasicPopover/>
																	</tr>
																	<tr class="font-weight-boldest border-bottom-0">
																		<td class="border-top-0 pl-0 py-4 d-flex align-items-center">
																		
																		<div class="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
																			<div class="symbol-label" style={{backgroundImage: "url(" + 'assets/media/products/2.png' + ")"}}></div>
																		</div>
																		هدفون</td>
																		<td class="border-top-0 text-right py-4 align-middle">1</td>
																		<td class="border-top-0 text-right py-4 align-middle">$449.00</td>
																		<td class="text-primary border-top-0 pr-0 py-4 text-right align-middle">$449.00</td>
													                      <BasicPopover/>
																	</tr>
																	<tr class="font-weight-boldest border-bottom-0">
																		<td class="border-top-0 pl-0 py-4 d-flex align-items-center">
																		
																		<div class="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
																			<div class="symbol-label" style={{backgroundImage: "url(" + 'assets/media/products/1.png' + ")"}}></div>
																		</div>
																	
																		بسته ی  کاغذ</td>
																		<td class="border-top-0 text-right py-4 align-middle">1</td>
																		<td class="border-top-0 text-right py-4 align-middle">$160.00</td>
																		<td class="text-primary border-top-0 pr-0 py-4 text-right align-middle">$160.00</td>
																		<BasicPopover/>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
												</div>
														</div>

    )
    
}
export default RPP;





{/* <div class="symbol symbol-150 mr-3">
<img alt="Pic" src="assets/media/users/300_25.jpg" />
</div> */}