import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'

import pic1 from '../assets/media/products/11.png'
import pic2 from '../assets/media/products/2.png'
import pic3 from '../assets/media/products/1.png'


function Cart(){
	return (
		<div class="flex-row-fluid ml-lg-8">
			<div class="card card-custom gutter-b">
				<div class="card-header flex-wrap border-0 pt-6 pb-0">
					<h3 class="card-title align-items-start flex-column">
						<span class="card-label font-weight-bolder font-size-h3 text-dark">My Shopping Cart</span>
					</h3>
					<div class="card-toolbar">
						<div class="dropdown dropdown-inline">
							<a href="#" class="btn btn-primary font-weight-bolder font-size-sm">Continue Shopping</a>
						</div>
					</div>
				</div>
				<div class="card-body">
					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th>Product</th>
									<th class="text-center">Qty</th>
									<th class="text-right">Price</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="d-flex align-items-center font-weight-bolder">
										<div class="symbol symbol-60 flex-shrink-0 mr-4 bg-light">
											<div class="symbol-label" style={{ backgroundImage:  "url("+pic1+")"}}></div>
										</div>
										<a href="#" class="text-dark text-hover-primary">Street Sneakers</a>
									</td>
									<td class="text-center align-middle">
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon mr-2">
											<i class="ki ki-minus icon-xs"></i>
										</a>
										<span class="mr-2 font-weight-bolder">1</span>
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon">
											<i class="ki ki-plus icon-xs"></i>
										</a>
									</td>
									<td class="text-right align-middle font-weight-bolder font-size-h5">$90.00</td>
									<td class="text-right align-middle">
										<a href="#" class="btn btn-danger font-weight-bolder font-size-sm">Remove</a>
									</td>
								</tr>
								<tr>
									<td class="d-flex align-items-center font-weight-bolder">
										<div class="symbol symbol-60 flex-shrink-0 mr-4 bg-light">
											<div class="symbol-label" style={{ backgroundImage:  "url("+pic2+")"}}></div>
										</div>
										<a href="#" class="text-dark text-hover-primary">Headphones</a>
									</td>
									<td class="text-center align-middle">
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon mr-2">
											<i class="ki ki-minus icon-xs"></i>
										</a>
										<span class="mr-2 font-weight-bolder">1</span>
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon">
											<i class="ki ki-plus icon-xs"></i>
										</a>
									</td>
									<td class="text-right align-middle font-weight-bolder font-size-h5">$449.00</td>
									<td class="text-right align-middle">
										<a href="#" class="btn btn-danger font-weight-bolder font-size-sm">Remove</a>
									</td>
								</tr>
								<tr>
									<td class="d-flex align-items-center font-weight-bolder">
										<div class="symbol symbol-60 flex-shrink-0 mr-4 bg-light">
											<div class="symbol-label" style={{ backgroundImage:  "url("+pic3+")"}}></div>
										</div>
										<a href="#" class="text-dark text-hover-primary">Smartwatch</a>
									</td>
									<td class="text-center align-middle">
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon mr-2">
											<i class="ki ki-minus icon-xs"></i>
										</a>
										<span class="mr-2 font-weight-bolder">1</span>
										<a href="javascript:;" class="btn btn-xs btn-light-success btn-icon">
											<i class="ki ki-plus icon-xs"></i>
										</a>
									</td>
									<td class="text-right align-middle font-weight-bolder font-size-h5">$999.00</td>
									<td class="text-right align-middle">
										<a href="#" class="btn btn-danger font-weight-bolder font-size-sm">Remove</a>
									</td>
								</tr>
								<tr>
									<td colspan="2"></td>
									<td class="font-weight-bolder font-size-h4 text-right">Subtotal</td>
									<td class="font-weight-bolder font-size-h4 text-right">$1538.00</td>
								</tr>
								<tr>
									<td colspan="4" class="border-0 text-muted text-right pt-0">Excludes Delivery. GST Included</td>
								</tr>
								<tr>
									<td colspan="2" class="border-0 pt-10">
										<form>
											<div class="form-group row">
												<div class="col-md-3 d-flex align-items-center">
													<label class="font-weight-bolder">Apply Voucher</label>
												</div>
												<div class="col-md-7">
													<div class="input-group w-100">
														<input type="text" class="form-control" placeholder="Voucher Code" />
														<div class="input-group-append">
															<button class="btn btn-secondary" type="button">Apply</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									</td>
									<td colspan="2" class="border-0 text-right pt-10">
										<a href="#" class="btn btn-success font-weight-bolder px-8">Proceed to Checkout</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Cart;