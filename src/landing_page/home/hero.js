import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5'>
           <div className='row text-center'>
            <img src="media/images/homeHero.png" alt='homehero image' className='mb-5' />
            <h1 className='mt-2'>Invest for future</h1>
            <p>Start your investment journey today</p>
            <button className='p-2 btn btn-primary fs-5 ' style={{width:"20%", margin:"0 auto"}} >Sign up</button>
           </div>
       </div>
    );
}

export default Hero;