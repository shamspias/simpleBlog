import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className = 'container'>
        <div className="jumbotron">
            <h1 className="display-4">Welcome To OP Blog</h1>
            <p className="lead">We are the Over Power Blog Who postt all OP staff</p>
            <hr className="my-4" />
            <p>Click The Button to cheak OP Blog</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check our Blog</Link>
        </div>
    </div>
);
 
export default home;