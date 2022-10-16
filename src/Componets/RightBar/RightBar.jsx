import React, { PureComponent } from 'react'
import Header from './header/Header'
import MainContent from './main-content/MainContent'

export default class RightBar extends PureComponent {

  render() {
    return (
      <div className='right-bar'>
        <Header /> 
        <MainContent /> 
      </div>
    )
  }
}
