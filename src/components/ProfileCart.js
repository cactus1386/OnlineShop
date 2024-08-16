import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
function ProductSlider() {
    const [CartItems,setCart]=useState([])
	const myHeaders = new Headers();
	myHeaders.append("accept", "application/json");
	myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzk3OTg0LCJpYXQiOjE3MjMzOTE5ODQsImp0aSI6ImZmZTY3ZDFkNmJjYzQyMGY5ZGY0Y2ZkMGQ0Zjc1MjRmIiwidXNlcl9pZCI6MX0.izIW47xPJQ6ImDKVhnmRrzhgtJWWh_WMUVShIWe65Nw");
	myHeaders.append("X-CSRFToken", "a4gVs4LKoK9qpwBtyktdTabLGKkDTjtt0aSC8gxZdbs3aTs15Xp16uXl7nRL3uLI");
	
	const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
	};

	fetch("http://94.183.74.154:1234/cart/", requestOptions)
	.then((response) => response.json())
	.then((result) => setCart(result.items))
	.catch((error) => console.error(error));
        return (  
                <>
				<div class='d-flex justify-content-center pt-5 fontv'>
					<div class="card card-custom col-md-9 " dir='rtl'>
						<div class="card-header border-0 pt-2">
							<h4 class="card-title align-items-center flex-column">
								<span class="card-label font-weight-bolder text-dark pt-3">لیست سفارشات</span>
							</h4>
						</div>
						<div class="card-body py-0">
							<div class="table-responsive">
								<table class="table table-sm  table-bordered table-hover table-vertical-center" id="kt_advance_table_widget_4">
									<thead class="thead-dark">
										<tr class="text-left">
											<th class="pl-0" style={{width: 30+'px'}}>
											</th>
											<th class="pl-0" style={{'min-width': 120+"px"}}>نام</th>
											<th style={{'min-width':110+"px"}} > قیمت هر کدام</th>
											<th style={{'min-width':110+"px"}} >تعداد</th>
											<th style={{'min-width':110+"px"}}>
												<span class="text">تاریخ</span>
											</th>
											<th style={{"min-width": 120+'px'}}>قیمت کل</th>
										</tr>
									</thead>
									<tbody>
									{CartItems?.map(c=>
										<tr>
											<td class="pl-0 py-6">
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg">{c.product.Id}</span>
											</td>
											<td class="pl-0">
												<a href="product" class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">{c.product.Name}</a>
											</td>
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg p-2">{c.product.Price}(تومان)</span>
											</td>
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg p-2">{c.product.Amount}</span>
											</td>
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg p-2">{c.product.Date}</span>
											</td>
				
											<td>
												<span class="text-dark-75 font-weight-bolder d-block font-size-lg p-2">{c.product.PriceSum}</span>
											</td>
											<td class="pr-0 text-right">
												<a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
													<span class="svg-icon svg-icon-md svg-icon-primary">
														<svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="0" y="0" width="24" height="24" />
																<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
															</g>
														</svg>
													</span>
												</a>
												<a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
													<span class="svg-icon svg-icon-md svg-icon-primary">
														<svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="0" y="0" width="24" height="24" />
																<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
															</g>
														</svg>
													</span>
												</a>
											</td>
										</tr>)	}
									
									
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
                
                </>
        );
    }
    
    export default ProductSlider;
   