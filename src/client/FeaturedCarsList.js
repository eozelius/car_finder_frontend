import React, { Component } from 'react'
import FeaturedCar from './FeaturedCar'
import './styles/FeaturedCarsList.scss'

export default class FeaturedCarsList extends Component {  
  constructor(props) {
    super(props)
  }
  
  render() {    
    return (
      <div className="featured-cars-list-container">
        <h1>Featured Cars</h1>
        <ul className="featured-cars-list">
          {
            this.props.cars.map(car => {
              return (
                <li key={car.id}>
                  <FeaturedCar car={car} />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
