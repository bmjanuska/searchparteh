import React from "react";
import "./Banner.css";
import { Jumbotron } from 'reactstrap';

const Banner = () => (
    <div>
        <Jumbotron>
            <h1 className="display-3">Get Searching!</h1>
            <hr className="my-2" />
            <p className="lead">Start a challenge bellow and go!</p>
        </Jumbotron>
    </div >
);

export default Banner; 