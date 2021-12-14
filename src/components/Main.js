import React, { useState } from 'react'
import './Navbar.css'
import OwlCarousel from 'react-owl-carousel2';
import '../../node_modules/react-owl-carousel2/lib/styles.css';
import item1 from './images/item1.png'
import approved from './images/approved.png'





const options = {

    items: 2,
    // autoplay: true,
    // autoplayTimeout: 2000,
    slideTransition: 'linear',
    loop: true
};

const events = {
    onDragged: function (event) {
        // console.log("hello 1");
    },
    onChanged: function (event) {
        // console.log("hello 1");
    }
};

function Main() {

    const [quantity, setQuantity] = useState(0);

    const AddQuantity = () => {
        setQuantity(quantity + 1);
        console.log('add')
    }
    const SubQuantity = () => {
        setQuantity(quantity - 1);
        console.log('sub')
    }



    return (
        <div className='Main'>
            <h2>Recomended Products</h2>
            <div className='options'>
                <p id='filter_p'>Selected Filters : <span id='filter'>Continental &#10006;</span></p>
                <p id='sort_p'>Sort By : &nbsp;
                    <select>
                        <option>Popularity</option>
                        <option>Lowest Price</option>
                        <option>Most Stock</option>
                        <option>Model A-Z</option>
                        <option>Code No.</option>
                    </select>
                </p>
            </div>
            <hr id='hrline' />
            <div>
                <OwlCarousel options={options} events={events} >
                    <div className='cards' id='card1'>
                        <span id='badge'>Premium BestSeller</span>
                        <img id='item1' src={item1} alt='item1' />
                        <div id='div2'>
                            <h3 id='h3_one'>Continental - Contiecocontact 5</h3>
                            <span id='info-box'>
                                <img id='approved1' src={approved} alt='approved' />

                                <p>
                                    205/55 R16H <br />
                                    SUV
                                </p>
                                <p>
                                    Stock <i id='greenCheck' className="fas fa-check-circle"></i> <br />
                                    Price $340
                                </p>
                                <p>
                                    Total <br />
                                    $1360
                                </p>
                            </span>



                            <div id='btn-info'>
                                <button id='subBtn' onClick={SubQuantity}>-</button>
                                <button id='cartValue'>{quantity}</button>
                                <button id='addBtn' onClick={AddQuantity}>+</button>
                                <button id='cartBtn'> <i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>

                            </div>

                        </div>
                    </div>


                    <div className='cards' id='card1'>
                        <span id='badge'>Economy BestSeller</span>
                        <img id='item1' src={item1} alt='item1' />
                        <div>
                            <h3 id='h3_one'>Continental - Contiecocontact 5</h3>
                            <span id='info-box'>
                                <img id='approved1' src={approved} alt='approved' />

                                <p>
                                    205/55 R16H <br />
                                    SUV
                                </p>
                                <p>
                                    Stock <i id='greenCheck' className="fas fa-check-circle"></i> <br />
                                    Price $340
                                </p>
                                <p>
                                    Total <br />
                                    $1360
                                </p>
                            </span>



                            <div id='btn-info'>
                                <button id='subBtn' onClick={SubQuantity}>-</button>
                                <button id='cartValue'>{quantity}</button>
                                <button id='addBtn' onClick={AddQuantity}>+</button>
                                <button id='cartBtn'> <i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>
                            </div>

                        </div>
                    </div>

                </OwlCarousel>
            </div >

            <div className='products' id='product1'>
                <h6>Continental <br /> PremiumContact &#8482; 6</h6>
                <img id='approved_product' src={approved} alt='approved' />
                <p>
                    195/55 R15 85V<br />
                    SUV
                </p>
                <p>
                    Stock <i id='greenCheck' className="fas fa-check-circle"></i> <br />

                </p>
                <p>Price $340</p>
                <p>
                    <button id='subBtn' onClick={SubQuantity}>-</button>
                    <button id='cartValue'>{quantity}</button>
                    <button id='addBtn' onClick={AddQuantity}>+</button>
                </p>
                <p>Total $1360</p>

                <p>
                    <button id='cartBtn_product'> <i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>
                </p>
            </div>
            <div className='products' id='product2'>
                <h6>Continental <br /> PremiumContact &#8482; 6</h6>
                <img id='approved_product' src={approved} alt='approved' />
                <p>
                    195/55 R15 85V<br />
                    SUV
                </p>
                <p>
                    Stock <i id='greenCheck' className="fas fa-check-circle"></i> <br />

                </p>
                <p>Price $340</p>
                <p>
                    <button id='subBtn' onClick={SubQuantity}>-</button>
                    <button id='cartValue'>{quantity}</button>
                    <button id='addBtn' onClick={AddQuantity}>+</button>
                </p>
                <p>Total $1360</p>

                <p>
                    <button id='cartBtn_product'> <i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>
                </p>
            </div>
            <div className='products' id='product3'>
                <h6>Continental <br /> PremiumContact &#8482; 6</h6>
                <img id='approved_product' src={approved} alt='approved' />
                <p>
                    195/55 R15 85V<br />
                    SUV
                </p>
                <p>
                    Stock <i id='greenCheck' className="fas fa-check-circle"></i> <br />

                </p>
                <p>Price $340</p>
                <p>
                    <button id='subBtn' onClick={SubQuantity}>-</button>
                    <button id='cartValue'>{quantity}</button>
                    <button id='addBtn' onClick={AddQuantity}>+</button>
                </p>
                <p>Total $1360</p>

                <p>
                    <button id='cartBtn_product'> <i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>
                </p>
            </div>

            <button id='loadBtn'>Load More Results</button>



        </div >
    )
}

export default Main
