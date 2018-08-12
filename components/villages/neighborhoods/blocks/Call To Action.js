import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import Title from "./components/villages/neighborhoods/blocks/houses/Title.js";
import Subtitle from "./components/villages/neighborhoods/blocks/houses/Subtitle.js";
import Button from "./components/villages/neighborhoods/blocks/houses/Button.js";

class CallToAction extends React.Component{
render(){
    return(
        <Col lg={12}>
        <Title/>
        <Subtitle/>
        <Button/>
        </Col>
    )
}
}
module.exports = CallToAction;