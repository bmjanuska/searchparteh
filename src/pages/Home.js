import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    state = {
        challenges: [],
        users: [],
    }

    componentDidMount() {
        axios.get("/api/challenges")
            .then(res => {
                this.setState({
                    challenges: res.data,
                })
                console.log(res);
            });
        console.log("the key " + process.env.REACT_APP_MAPS_API_KEY);
    }

    render() {
        return (
            <div className="Home">
                <Banner />
                <Container>
                    <Row>
                        <h1>Challenges</h1>
                    </Row>
                    {/* Challenges */}
                    {/* {this.state.challenges.map(item => {
                        return ( */}
                    <Row >
                        <Col xs="12" md="8">
                            {/* challenge name */}
                            <h3 className="Challenge Name">Orlando Adventurer</h3>
                            {/* number of places in the challenge */}
                            <h4>3 Places</h4>
                            <br></br>
                        </Col>
                        <Col xs="12" md="4">
                            {/* begin challenge and make this update the challenge page to make this current challenge  */}
                           {/* placeholder */}
                            <Link
                                to="/challenge"
                                className={
                                    window.location.pathname === "/challenge" || window.location.pathname === "/challenge"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                <button className="btn btn-red text-right">Start Challenge</button>
                            </Link>
                        </Col>
                    </Row>
                    {/* ); */}
                </Container>
            </div>
        );
    }
}

export default Home;
