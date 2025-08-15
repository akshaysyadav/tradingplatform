import React from 'react';

function Universe() {
    return ( 
         <div className='container  mb-5'>
            <div className='row text-center'>
                <p className='fs-5 mt-3 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
                <h2 className='mt-4'>The Zerodha Universe</h2>
                <p className='fs-6 mt-2 mb-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" 
          style={{width:"50%"}} />
          <p className="text-small mt-3 text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"  style={{width:"60%"}}/>
          <p className="text-small mt-3 text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"60%"}}/>
          <p className="text-small mt-3 text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"  style={{width:"50%"}}/>
          <p className="text-small mt-3 text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"/>
          <p className="text-small mt-3 text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png"  style={{width:"40%"}}/>
          <p className="text-small mt-3 text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>

         <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
            </div>
        </div>
     );
}

export default Universe;