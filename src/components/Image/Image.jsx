import React from 'react'
import './image.css'

export default class Image extends React.Component {
    render(){
        return <div>
        <img className="match-img" src={this.props.url} alt="" />
        <h2 className="img-description">{this.props.description}</h2>
        </div> 
    }
}