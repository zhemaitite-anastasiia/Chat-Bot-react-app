import React from 'react';
import ReactDOM from 'react-dom';
import {Container,Row, Col} from 'react-grid-system';
import UserMessage from './houses/User Message.js';
import ChatBotMessage from './houses/Chat Bot Message.js';

class SlackChannel extends React.Component{
    render(){
        return(
            <Col lg={12}>
            <img className="slack-channel" src='./images/SlackChannel.png' />
            {messages ? (
                //render messages is true (demo)
        <div>
            <UserMessage/>
            <ChatBotMessage/>
            </div>
            ):(
                //render nothing
                <div></div>
            )}
            </Col>
        )
    }
}

module.exports = SlackChannel;