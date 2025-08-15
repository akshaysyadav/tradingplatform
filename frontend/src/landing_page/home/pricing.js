import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
        <div className='row '>
            <div className='col-md-4 mb-5'>
                <h1 className='md-5 mb-3' >Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <a href='' className='mx-5' style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>

            </div>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <div className='row fs-4 text-center'>
                     <div className='col p-2 border'>
                        <p>₹0</p>
                        <p>Free equity delivery and direct mutual funds</p>
                     </div>
                     <div className='col p-2 border'>
                        <p>₹20</p>
                        <p>Intraday and F&O</p>
                     </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Pricing;