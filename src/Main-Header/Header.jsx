import React from "react";
import "../index.css";

const Header = () => {
    return (
        <>
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="my_logo">
                            <img src="/assets/IRA_Logo.png" alt="IRA Logo" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="header_menu_text">
                            <h4 className="">Ethical & Affordable Surrogacy in Ukraine | Embryon Fertility Kyiv</h4>
                           <div className="mybutton">
                            <a href="#" className="my_web_button">Book Your Free Consultation</a>
                            </div>
                        </div>
                        
                        {/* <div className="desk_menu">
                            <ul>
                                <li>
                                    <a href="#" className="active">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide-house"
                                        >
                                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li><a href="#">About US</a></li>
                                <li><a href="#">Egg Donation</a></li>
                                <li><a href="#">Surrogacy</a></li>
                                <li><a href="#">Our Articles</a></li>
                                <li><a href="#">Contact US</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
         
        </>
    );
};

export default Header;
