import React from "react";
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import ArticleCover from "./components/villages/neighborhoods/blocks/houses/Article Cover.js"
import SectionDescription from "./components/villages/neighborhoods/blocks/Section Description.js"



class SectionB extends React.Component{
    render(){
        return(
            <section className="section-b">
            <Container>
                <Row>
                    <ArticleCover/>
                    <SectionDescription/>
                    </Row>
                </Container>
            </section>

        )
    }
}

module.exports = SectionB;