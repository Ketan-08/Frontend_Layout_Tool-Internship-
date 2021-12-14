import React from 'react'
import mainlogo from './images/mainlogo.png'
import './Navbar.css'
import { MdSearch } from "react-icons/md";


function Navbar() {

    

    return (
        <div className="navbar">
            <nav >
                <div className="container-fluid m-auto">

                    <i className="fas m-auto fa-2x fa-sliders-h"></i>
                    <img id='mainlogo' src={mainlogo} alt="mainlogo" />

                    <div className='searchbar'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
{/* 
                        <MdSearch
                            id='searchIcon'
                            style={{
                                // position: 'absolute',
                                // position:'flex-end',

                                margin: 'auto',
                                marginTop: '42px',
                                marginLeft: '660px',
                                width: '35px',
                                height: '35px',
                                cursor: 'pointer',
                                backgroundColor: '#ffc107',
                                borderRadius: '19px'

                            }} /> */}
                    </div>

                    <div className='icons'>
                        <span>
                            <i className="fa fa-2x fa-user" aria-hidden="true"></i>
                            <p>Account</p>
                        </span>
                        <span>
                            <i className="fa fa-2x fa-sticky-note"></i>
                            <p>Orders</p>
                        </span>
                        <span>
                            <i className="fas fa-2x fa-shopping-cart"></i>
                            <p>Cart</p>
                        </span>


                    </div>

                </div>
            </nav>
        </div>

    )
}

export default Navbar
