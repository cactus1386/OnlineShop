import Slider from './HSlider';
import Products from "./HProducts"
import Categories from "./HCat"
function Home() {
    return (
        <div class='col-md-12'>
            <Slider />
            <Categories />
            <Products />
        </div>
    )

}
export default Home;