import React from 'react';

function Rightsection({ 
    imageURL,
    productName,
    productDescription,
    tryDemo,
}) {
    return ( 
        <div className='container  mb-5'>
            <div className='row align-items-center'>
                <div className='col-5 p-5 '>
                    <h2>{productName}</h2>
                    <p className='mt-3'>{productDescription}</p>
                    <div className='p-3'>
                        <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-7 p-5'>
                    <img src={imageURL} alt="product image"/>
                </div>
            </div>
        </div>
    );
}

export default Rightsection;