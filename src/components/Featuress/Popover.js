import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../assets/css/CardCss.css'
import '../../font/font.css'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} >
        <a className='fontv'>مشخصات محصول</a>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'middle',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className='sizeCard'>
											<div class="card-body d-flex rounded bg-primary p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
												<div class="bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-550px" style={{ backgroundImage: "url(" + 'https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-19.jpg' + ")" }} ></div>
												<div class="card card-custom w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto">
													<div class="card-body px-12 py-10">
														<h3 class="font-weight-bolder font-size-h2 mb-1">
															<a href="#" class="text-dark-75">Nike True Balance</a>
														</h3>    
														<div class="text-primary font-size-h4 mb-9">$ 399.99</div>
														<div class="font-size-sm mb-8">Outlines keep you honest. They stop you from indulging in poorly ought out metaphorsy about driving and keep you focused one the overall structure of your post</div>
														<div class="d-flex mb-3">
															<span class="text-dark-50 flex-root font-weight-bold">Shoes Brand</span>
															<span class="text-dark flex-root font-weight-bold">Nike</span>
														</div>
														<div class="d-flex mb-3">
															<span class="text-dark-50 flex-root font-weight-bold">SKU</span>
															<span class="text-dark flex-root font-weight-bold">NF3535</span>
														</div>
														<div class="d-flex mb-3">
															<span class="text-dark-50 flex-root font-weight-bold">Color</span>
															<span class="text-dark flex-root font-weight-bold">White</span>
														</div>
														<div class="d-flex mb-3">
															<span class="text-dark-50 flex-root font-weight-bold">Collection</span>
															<span class="text-dark flex-root font-weight-bold">2020 Spring</span>
														</div>
														<div class="d-flex">
															<span class="text-dark-50 flex-root font-weight-bold">In Stock</span>
															<span class="text-dark flex-root font-weight-bold">280</span>
                              
														</div>
													</div><a href="#" class="btn btn-light-success font-weight-bold fontv">دیدن محصول</a>
												</div>
											</div>
											</div>
										
          {/* <div class='sizeCard'>
        <div class="card-header ">
												<div class="card-title">
													<span class="card-icon">
														<i class="flaticon2-chat-1 text-primary"></i>
													</span>
													<h3 class="card-label">Card Footer
													<small>sub title</small></h3>
												</div>
												<div class="card-toolbar">
													<a href="#" class="btn btn-sm btn-success font-weight-bold">
													<i class="flaticon2-cube"></i>Reports</a>
												</div>
											</div>
											<div class="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
											<div class="card-footer d-flex justify-content-between">
												<a href="#" class="btn btn-light-primary font-weight-bold">Manage</a>
												<a href="#" class="btn btn-outline-secondary font-weight-bold">Learn more</a>
											</div>
										</div> */}
        </Typography>
      </Popover>
    </div>
  );
}
