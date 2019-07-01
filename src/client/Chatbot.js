import React, { Component } from 'react'
import axios from 'axios'
import UserMessage from './UserMessage'
import './styles/Chatbot.scss'
import ChatbotMessage from './ChatbotMessage';

export default class Chatbot extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      messages: []      
    }
  }

  userMessage = (message) => {
    const newMessages = this.state.messages.slice()
    newMessages.push({
      sentBy: 'user',
      message
    })
    
    this.setState({ messages: newMessages })
  }

  handleResults = (cars) => {
    const newMessages = this.state.messages.slice()

    cars.forEach((car) => {
      newMessages.push({
        sentBy: 'chatbot',
        ...car
      })
    })

    this.setState({
      messages: newMessages
    })    
  }

  handleInput = (e) => {    
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.searchTerm === '') {
      return
    }

    this.userMessage(this.state.searchTerm)

    axios.post('http://localhost:3000/car-finder', {
      searchTerm: this.state.searchTerm
    })
      .then((response) => {
        this.handleResults(response.data)
      })
      .catch((error) => {
        console.error('error => ', error)
      })
  }
  
  render() {    
    return (
      <div className="chatbot-container">        
        <form onSubmit={this.handleSubmit} >
          <input
            onInput={this.handleInput}
            className="search-term"
            type="text"
            name="search-term"
            placeholder="Search..."
          />
          <input type="submit" value="Find Cars" />
        </form>

        <div className="convo">
          <ul>
            {
              this.state.messages.map((message, index) => {                
                if(message.sentBy === 'user') {
                  return <UserMessage text={message.message} key={index} />
                } else if (message.sentBy === 'chatbot') {
                  return <ChatbotMessage message={message} key={index} />
                } else {
                  console.error('message was not sent by user or chatbot')
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
