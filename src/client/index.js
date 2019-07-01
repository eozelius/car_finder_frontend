import React from 'react'
import ReactDOM from 'react-dom'
import CarFinderHeader from './CarFinderHeader'
import FeaturedCar from './FeaturedCar'
import FeaturedCarsList from './FeaturedCarsList'
import Chatbot from './Chatbot'

// ReactDOM.render(<App />, document.getElementById('root'));


/** Attach React library and components to global window,
 * so that they can be used in any window that imports bundle
 */
window.React = React
window.ReactDOM = ReactDOM
window.CarFinderHeader = CarFinderHeader
window.FeaturedCar = FeaturedCar
window.FeaturedCarsList = FeaturedCarsList
window.Chatbot = Chatbot
