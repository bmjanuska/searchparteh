import React from "react";
import "./Banner.css";
import { Jumbotron, Row, Col  } from 'reactstrap';

const Banner = () => (
    <div>
        <Jumbotron>
            <Row>
                <Col sm="12" md="4">
                <h1 className="display-3">Get Searching!</h1>
                </Col>
                <Col sm="12" md="4">
                <img style={{ width: 150 }} src="https://66.media.tumblr.com/5f714906e8a8476af8bec47dde453309/tumblr_phe3weCBSC1qegkvoo1_1280.png"/>
                </Col>
                </Row>
            
        </Jumbotron>
    </div >
);

export default Banner; 