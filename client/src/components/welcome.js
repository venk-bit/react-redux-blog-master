import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p><em>A one-stop place to share and acquire information about interview experiences of companies visiting NIT Jamshedpur. </em></p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Dive into posts &raquo;</Link></p>
    </div>

    { /*Example row of columns*/ }
   <div >
    <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div className = "bg-custom-4">
                <div>
                  <h2>Read</h2>
                  <p>Navigate through all the interview experiences uploaded by NIT Jamshedpur seniors, through the help of helpful tags and description and prepare yourself for your dream company.</p>
                </div>
                </div>
                <div>
                <div className = "bg-custom-4">
                  <h2>Write n Share</h2>
                  <p>The only source of knowledge is experience. Albert Einstein<br></br> We thank you for taking out time and sharing your interview experiences.<br></br> Feel free to write, edit or delete artiles and posts through your personal account.<br></br> You shall be the one enlightening students who want to dive deep into interview process. <br></br><br></br><br></br> .</p>
                </div>
               </div>
               <div className = "bg-custom-4">
                <div>
                <h2>Comments</h2>
                <p> Readers can feel free to ask questions or doubts about any particular post or comment any additonal information about any post.</p>
              </div>
                </div>
            </Carousel></div></div>



);
