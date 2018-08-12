import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from "react-grid-system";
import Divider from "./components/villages/neighborhoods/blocks/houses/Divider.js"
import Heading from "./components/villages/neighborhoods/blocks/houses/Heading.js"
import Paragraph from "./components/villages/neighborhoods/blocks/houses/Paragraph.js"

class SectionDescription extends React.Component{
    render(){
        return(
           <Col lg={6}>
           <Heading/>
           <Divider/>
           <Paragraph/>
           </Col>
        )
    }
}


module.exports = SectionDescription;