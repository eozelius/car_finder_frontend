import React, { Component } from 'react'
import './styles/UserMessage.scss'

export default class UserMessage extends Component {  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <li className="message user-message" >        
        <h3>{ this.props.text }</h3>
      </li>
    )
  }

}