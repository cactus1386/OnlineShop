import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'

function Filter() {
    return(
        <div class="card card-custom gutter-b">
        <div class="card-body">
            <form>
                <div class="form-group mb-11">
                    <label class="font-size-h3 font-weight-bolder text-dark mb-7">Categories</label>
                    <div class="checkbox-list">
                        <label class="checkbox checkbox-lg mb-7">
                            <input type="checkbox" name="electronics" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">Electronics</div>
                            <div class="ml-auto text-muted font-weight-bold">28</div>
                        </label>
                        <label class="checkbox checkbox-lg mb-7">
                            <input type="checkbox" name="sportsequipment" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">Sports Equipments</div>
                            <div class="ml-auto text-muted font-weight-bold">307</div>
                        </label>
                        <label class="checkbox checkbox-lg mb-7">
                            <input type="checkbox" name="appliances" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">Appliances</div>
                            <div class="ml-auto text-muted font-weight-bold">54</div>
                        </label>
                        <label class="checkbox checkbox-lg mb-7">
                            <input type="checkbox" name="appliances" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">Software Solutions</div>
                            <div class="ml-auto text-muted font-weight-bold">762</div>
                        </label>
                        <label class="checkbox checkbox-lg">
                            <input type="checkbox" name="appliances" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">Food &amp; Groceries</div>
                            <div class="ml-auto text-muted font-weight-bold">95</div>
                        </label>
                    </div>
                </div>
                <div class="form-group mb-7">
                    <label class="font-size-h3 font-weight-bolder text-dark mb-7">Price</label>
                    <div class="radio-list">
                        <label class="radio radio-lg mb-7">
                            <input type="radio" name="price" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">All</div>
                            <div class="ml-auto text-muted font-weight-bold">2047</div>
                        </label>
                        <label class="radio radio-lg mb-7">
                            <input type="radio" name="price" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">0$ - 99$</div>
                            <div class="ml-auto text-muted font-weight-bold">1403</div>
                        </label>
                        <label class="radio radio-lg mb-7">
                            <input type="radio" name="price" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">100$ - 999$</div>
                            <div class="ml-auto text-muted font-weight-bold">570</div>
                        </label>
                        <label class="radio radio-lg">
                            <input type="radio" name="price" />
                            <span></span>
                            <div class="font-size-lg text-dark-75 font-weight-bold">1000$ &amp; Above</div>
                            <div class="ml-auto text-muted font-weight-bold">38</div>
                        </label>
                    </div>
                </div>
                <div class="form-group mb-13">
                    <div class="text-muted font-weight-bolder font-size-lg mb-5">Pricing Slider</div>
                    <div id="kt_price_slider" class="nouislider nouislider-light nouislider-handle-primary nouislider-bg-light-primary nouislider-shadowless nouislider-borderless"></div>
                </div>
                <div class="form-group">
                    <label class="font-size-h3 font-weight-bolder text-dark mb-7">Color</label>
                    <div class="radio-inline mb-11">
                        <label class="radio radio-accent radio-danger mr-0">
                            <input type="radio" name="color-selector" checked="checked" />
                            <span></span>
                        </label>
                        <label class="radio radio-accent radio-primary mr-0">
                            <input type="radio" name="color-selector" />
                            <span></span>
                        </label>
                        <label class="radio radio-accent radio-success mr-0">
                            <input type="radio" name="color-selector" />
                            <span></span>
                        </label>
                        <label class="radio radio-accent radio-info mr-0">
                            <input type="radio" name="color-selector" />
                            <span></span>
                        </label>
                        <label class="radio radio-accent radio-dark mr-0">
                            <input type="radio" name="color-selector" />
                            <span></span>
                        </label>
                        <label class="radio radio-accent radio-secondary mr-0">
                            <input type="radio" name="color-selector" />
                            <span></span>
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary font-weight-bolder mr-2 px-8">Reset</button>
                <button type="reset" class="btn btn-clear font-weight-bolder text-muted px-8">Setup</button>
            </form>
        </div>
    </div>
    );
}
export default Filter;