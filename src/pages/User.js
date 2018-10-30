import React, { Component } from 'react';
import { Hbar } from "../components/Bars";
import { Container, Row, Col } from 'reactstrap';

class User extends Component {

    render() {
        return (
            <div>
                <Container>
                    <div className="User">

                        {/* spacer  */}
                        <span style={{ margin: 50 }} />
                        {/*  end spacer  */}

                        <h1>bernfern</h1>
                        {/* user rank */}
                        <Hbar />
                        <h3>User Rank: Timid Hiker</h3>
                        <h3>Number of Completed: 5 Challenges</h3>
                        {/* user Badges */}
                        <Hbar />

                        <h2>Badges</h2>
                        <img style={{ width: 150 }} src="https://66.media.tumblr.com/e5c3da4f67b10e39bea6cbf5ad14ced2/tumblr_phf0qvFFYY1qegkvoo5_400.png" />
                        <img style={{ width: 150 }} src="https://66.media.tumblr.com/43bde8f34e7cfa4ca955ca256b055859/tumblr_phf0qvFFYY1qegkvoo4_400.png" />
                        <img style={{ width: 150 }} src="https://66.media.tumblr.com/6348734ed9336ff7616406d7252be59d/tumblr_phf0qvFFYY1qegkvoo1_400.png" />
                        <img style={{ width: 150 }} src="https://66.media.tumblr.com/2780d33344a16787b516db882b3c5e61/tumblr_phf0qvFFYY1qegkvoo2_400.png" />
                        <img style={{ width: 150 }} src="https://66.media.tumblr.com/fa154c7a9c0308855635b445fe490d0f/tumblr_phf0qvFFYY1qegkvoo3_400.png" />

                    </div >
                </Container>
            </div>
        );
    }
}

export default User;

