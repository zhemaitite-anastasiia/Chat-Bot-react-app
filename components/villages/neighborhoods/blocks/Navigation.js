import React from 'react';
import ReactDOM from "react-dom";
import {Container, Row, Col} from 'react-grid-system';
import Branding from "./components/villages/neighborhoods/blocks/houses/Branding.js";
import DemoLink from "./components/villages/neighborhoods/blocks/houses/Demo Link.js";

class Navigation extends React.Component {
    render(){
        return (
            <Col lg={12}>
              <Branding/>
              <DemoLink/>
            </Col>
        )
        
    }
}

module.exports = Navigation;