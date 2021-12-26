import React from 'react'
import './button.css'

export default class Button extends React.Component {
    handleClick = () => {
        this.props.incrementCounter(this.props.counterType)
        this.props.getNextImage()
    }
    
    render(){
        const iconClass = `far fa-${this.props.icon} fa-5x`
        return <button className="tinder-btn" onClick={this.handleClick}><i className={iconClass}></i></button>
    }
}