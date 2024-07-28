import React from 'react';
import "./Header.css"

const Header= () => {
    return (
        <div>
             <header className="bg-clr py-3">
                <div className="container px-4 px-lg-5 my-3"> 
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">TECH-LEARN</h1>
                        <p className="lead fw-normal text-white-50 mb-0">GET START JOURNEY WITH US...!!</p>
                    </div>
                </div>
            </header>           
        </div>
    );
};

export default Header;