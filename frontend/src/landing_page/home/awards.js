import React from 'react';

function Awards() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div className='row'>
        <div className='col-6'>
            <img src="media/images/largestBroker.svg" />
        </div>
        <div className='col-6 text-center mt-5 mb-5'>
             <h1>Largest stock broker in India</h1>
             <p>Our company has been awarded as the largest stock broker in India by the Indian stock</p>
             <div className='row mt-4 mb-4 fs-5'>
             <div className='col-6'>
               <ul>
                <li><p>Best stock broker in India</p></li>
                <li><p>Trust with confidence</p></li>
                <li><p>Best customer service</p></li>
               </ul>
             </div>
             <div className='col-6'>
                <ul>
                    <li><p>Customer-first always</p></li>
                    <li><p>Best trading platform</p></li>
                    <li><p>Do better with money</p></li>
                </ul>
             </div>
             </div>
             <img src='media/images/pressLogos.png' style={{width:"90%"}} />
        </div>
        </div>
       </div>
     );
}

export default Awards;