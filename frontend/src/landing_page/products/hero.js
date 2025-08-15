import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 p-5 text-center fs-5 '>
                  <h3>Zerodha Products</h3>
                  <p className='text-muted'>Sleek, modern, and intuitive trading platforms</p>
                  <p className='text-muted'>Check out our <a href='#'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
            <hr></hr>
        </div>
     );
}

export default Hero;