import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p><em>A one-stop place to share and acquire information about interview experiences of companies visiting NIT Jamshedpur. </em></p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Dive into posts &raquo;</Link></p>
    </div>

    { /*Example row of columns*/ }
  


);
