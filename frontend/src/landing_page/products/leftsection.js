import React from 'react';

function Leftsection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5 '>
                    <img src={imageURL} alt="product image"/>
                </div>
                <div className='col-1 p-5'></div>
                <div className='col-5 p-5 mt-5'>
                    <h2>{productName}</h2>
                    <p className='mt-3'>{productDescription}</p>
                    <div className='p-3'>
                    <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore}
                    style={{marginLeft:"70px"}}
                    >Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg" />
                    </a>
                    <a href={appStore}   style={{marginLeft:"40px"}}>
                        <img src="media/images/appstoreBadge.svg" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Leftsection;