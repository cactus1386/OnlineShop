import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css';
import '../assets/plugins/custom/prismjs/prismjs.bundle.css';
import '../assets/css/style.bundle.css';
import '../assets/font/font.css'


import pic from '../assets/media/users/blank.png';
import pic2 from '../assets/media/users/300_21.jpg';

function Info() {
    return (
        <div class=' d-flex justify-content-center'>
        <div class="flex-row-fluid  col-md-8  fontv" dir='rtl'>
            <div class="card card-custom card-stretch ">
                <div class="card-header py-3">
                    <div class="card-title align-items-start flex-column">
                        <h3 class="card-label font-weight-bolder text-dark">اطلاعات شخصی </h3>
                    </div>
                    <div class="card-toolbar">
                        <button type="reset" class="btn btn-secondary">لغو</button>
                        <button type="reset" class="btn btn-success  mr-2">ذخیره تغییرات</button>
                    </div>
                </div>
                <form class="form">
                    <div class="card-body">

                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">آواتار:</label>
                            <div class="col-lg-9 col-xl-6">
                                <div class="image-input image-input-outline" id="kt_profile_avatar" style={{ backgroundImage:  "url("+pic+")"}}  >
                                    <div class="image-input-wrapper" style={{ backgroundImage:  "url("+pic2+")"}} ></div>
                                    <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                        <i class="fa fa-pen icon-sm text-muted"></i>
                                        <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                        <input type="hidden" name="profile_avatar_remove" />
                                    </label>
                                    <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                                    </span>
                                    <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                                    </span>
                                </div>
                                <span class="form-text text-muted">فرمت های قابل قبول: png, jpg, jpeg.</span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">نام:</label>
                            <div class="col-lg-9 col-xl-6">
                                <input class="form-control form-control-lg form-control-solid" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">نام خانوادگی:</label>
                            <div class="col-lg-9 col-xl-6">
                                <input class="form-control form-control-lg form-control-solid" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">تلفن همراه :</label>
                            <div class="col-lg-9 col-xl-6">
                                <div class="input-group input-group-lg input-group-solid">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="la la-phone"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-solid"  placeholder="تلفن همراه" />
                                </div>                        
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">ایمیل :</label>
                            <div class="col-lg-9 col-xl-6">
                                <div class="input-group input-group-lg input-group-solid">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="la la-at"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control form-control-lg form-control-solid"  placeholder="ایمیل" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-xl-3 col-lg-3 col-form-label">آدرس:</label>
                            <div class="col-lg-9 col-xl-6">
                                <input class="form-control form-control-lg form-control-solid" type="text"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Info;