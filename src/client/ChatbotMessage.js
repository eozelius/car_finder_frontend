import React, { Component } from 'react'
import './styles/ChatbotMessage.scss'

export default class ChatbotMessage extends Component {  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <li className="message chatbot-message" >
        <h3>{ this.props.message.make } - { this.props.message.name }</h3>
        <p>year: { this.props.message.year }</p>
        <p>style: { this.props.message.style }</p>
        <p>price range: { this.props.message.price_range }</p>
        <p>color: { this.props.message.color }</p>
      </li>
    )
  }
}