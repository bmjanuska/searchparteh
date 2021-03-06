import React, { Component } from 'react';
import Map from "../components/Map"
import ChallengeList from "../components/ChallengeList"
import ModalSuccess from "../components/ModalSuccess"
import ModalDenied from "../components/ModalDenied"

import { Hbar } from "../components/Bars";
import { Container, Row, Col } from 'reactstrap';

import axios from "axios";


class Challenge extends Component {
    state = {
        locations: [],
        users: [],
        successOpen: false,
        denileOpen: false
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => res.text())
            .then(text => console.log(text))
            .then(users => this.setState({ users }));

        if (navigator.geolocation) {
            /* geolocation is available */
            navigator.geolocation.watchPosition(position => {
                console.log(position);
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                this.setState({ pos, isMarkerShown: true })
                // panTo(pos); 
                // Map.setPosition(pos)
                // Map.setContent('Location Here. ')
                // Map.setCenter(pos)
            })
        } else {
            /* geolocation IS NOT available */
        };

        axios.get("/challenge")
            .then(res => {
                this.setState({
                    locations: res.data,
                })
                console.log(res);
            });
    }

    checkin = () => {
        console.log("I be checkin in~")
        //if userlocation === the location of the specific location checkin in successfully 
        // Recieve a congrats you found the spot msg
        this.setState({ successOpen: true })
        // else 
        // Keep lookin! 
    }

    handleSuccessClose = () => {
        this.setState({ successOpen: false })
    }

    handleDeniedClose = () => {
        this.setState({ denileOpen: false })
    }

    render() {
        return (
            <div className="Challenge">
                {this.state.successOpen && <ModalSuccess handleClose={this.handleSuccessClose} />}
                {this.state.denileOpen && <ModalDenied handleClose={this.handleDeniedClose} />}

                <Map
                    pos={this.state.pos}
                    isMarkerShown={this.state.isMarkerShown}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

                <Container>

                    {/* spacer  */}
                    <span style={{ margin: 50 }} />
                    {/*  end spacer  */}

                    <br></br>
                    {this.state.locations.map(item => {
                        return (
                            <Row key={item.id}>
                                <h1 className="Checkpoints">{item.clue}</h1>
                                {/* {this.state.users.map( over the checkpoints)} */}

                                <Hbar />
                                <ChallengeList
                                    handleCheckin={this.checkin}
                                />
                            </Row>
                        );
                    })}

                    {/* Challenges */}
                    <Row>
                    <h3 className="Challenge Name">Orlando Adventurer</h3>
                    </Row>
                    <Row style={{ marginBottom: 15 }} >
                        <Col sm="12" md="8">
                            {/* challenge name */}
                            <h2 className="Challenge Name">Location 1</h2>
                            {/* number of places in the challenge */}
                            <p>The swans of Orlando love to swim here. Also has a fun farmers market on Sundays.</p>
                            <br></br>
                        </Col>
                        <Col sm="12" md="4">
                            {/* begin challenge and make this update the challenge page to make this current challenge  */}
                            <button href="#" className="btn btn-red text-right">Check In</button>
                        </Col>
                    </Row>


                    <Row style={{ marginBottom: 15 }}>
                        <Col sm="12" md="8">
                            {/* challenge name */}
                            <h2 className="Challenge Name">Location 2</h2>
                            {/* number of places in the challenge */}
                            <p>Roses are red, violets are blue, a beautiful garden dream come true!</p>
                            <br></br>
                        </Col>
                        <Col sm="12" md="4">
                            {/* begin challenge and make this update the challenge page to make this current challenge  */}
                            <button href="#" className="btn btn-red text-right">Check In</button>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: 15 }}>
                        <Col sm="12" md="8">
                            {/* challenge name */}
                            <h2 className="Challenge Name">Location 3</h2>
                            {/* number of places in the challenge */}
                            <p>Learn how to code the MERN stack here. The colors black and gold are well received here.</p>
                            <br></br>
                        </Col>
                        <Col sm="12" md="4">
                            {/* begin challenge and make this update the challenge page to make this current challenge  */}
                            <button href="#" className="btn btn-red text-right">Check In</button>
                        </Col>
                    </Row>


                </Container>

            </div>
        );
    }
}

export default Challenge;

