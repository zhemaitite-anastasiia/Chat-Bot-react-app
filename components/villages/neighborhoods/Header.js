import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import Navigation from "./components/villages/neighborhoods/blocks/Navigation.js";
import CallToAction from "./components/villages/neighborhoods/blocks/Call To Action.js";
import SlackChannel from "./components/villages/neighborhoods/blocks/houses/Slack Channel.js";

class Header extends React.Component {
    render(){
        return(
            <section className="header">
            <Container>
                <Row>
                    <Navigation/>
                    </Row>
                    <Row>
                        <CallToAction/>
                            </Row>
                            <Row>
                                <SlackChannel/>
                                </Row>

                </Container>
                </section>
        )
    }
}
module.exports = Header;
