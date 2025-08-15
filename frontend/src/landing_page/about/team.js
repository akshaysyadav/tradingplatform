import React from 'react';

function Team() {
    return ( 
         <div className='container'>
            <div className='row'>
                  <p className='fs-3 mt-4 mb-4 p-5 text-center '> Project made by </p>
            </div>
    
            <div className='row mt-3 p-5  fs-6'
            style={{lineHeight:"1.8"}}>
                <div className='col-md-1'></div>
                <div className='col-md-5 text-center'> 
                    <img src="media/images/profileicon.webp" 
                    style={{borderRadius:"100%", width:"50%" , padding:"2%"}}></img>

                    <p > Akshay Yadav </p>
                 </div>
                <div className='col-md-5 fs-4 text-muted'
                style={{lineHeight:"1.8"}}>
                     <p>
                        Hi, I’m Akshay Yadav — a curious builder, design lover, and code enthusiast. I’m studying engineering while crafting web experiences that are simple, engaging, and meaningful. I love blending creativity with clean code to turn ideas into smooth, user-friendly digital experiences.
                     </p>
                   
                    </div>
                <div className='col-md-1'></div>
            </div>
        </div>
     );
}

export default Team;
<h1>team</h1>