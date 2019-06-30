import React, { Component } from 'react'
import './styles/FeaturedCar.scss'

export default class FeaturedCar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { car } = this.props
    
    return (
      <div className="featured-car">
        <h5>{ car.make } { car.name }</h5>
        <p>year: { car.year }</p>
        <p>type: { car.style }</p>
        <p>color: { car.color }</p>
      </div>
    )
  }
}
