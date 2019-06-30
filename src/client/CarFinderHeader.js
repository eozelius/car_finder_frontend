import React, { Component } from 'react'
import './styles/CarFinderHeader.scss'

export default class CarFinderHeader extends Component {
  render() {
    return (
      <div className="car-finder-header">
        <h1> REACT Welcome to the Car Finder</h1>
        <h4>You can search for different types of cars by name, make, model, year price range color</h4>
      </div>
    )
  }
}
