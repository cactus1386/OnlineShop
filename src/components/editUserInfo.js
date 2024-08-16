import React, { useState, useEffect } from "react";

const EditUserInfo = () => {
  return (
    <>
      <div class="d-flex justify-content-center col-md-12">
        <div class="col-md-8 card fontv" dir="rtl">
          <div class="col-md-12">
            <div class=" border-bottom p-2">
              <h3 class="fontv text-dark"> اطلاعات کاربری</h3>
            </div>
            <div class="col-md-12">
              <div class=" col-md-12 p-3">
                <div>
                  <label class="pb-2 h5">نام:*</label>
                  <input class=" form-control" required />
                </div>
                <div>
                  <label class="pb-2 h5 pt-3"> نام خانوادگی:*</label>
                  <input class=" form-control" required />
                </div>
                <div>
                  <label class="pb-2 h5 pt-3"> پروفایل (اختیاری):</label>
                  <br></br>
                  <input dir="ltr" type="image" />
                </div>
                <div>
                  <label class="pb-2 h5 pt-3">ایمیل:*</label>
                  <input
                    dir="ltr"
                    class=" form-control"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div class="pb-3">
                  <label class="pb-2 h5 pt-3">آدرس:</label>
                  <input
                    class=" form-control"
                    placeholder="به عنوان مثال: زنجان،زنجان ، کوی صفرآباد ، خیابان فلان ، کوچه فلان، پلاک1234"
                    required
                  />
                </div>
                <div class="d-flex justify-content-center p-2">
                  <button
                    type="submit"
                    className="btn btn-success col-10 col-sm-10 col-md-8"
                  >
                    ثبت
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserInfo;
