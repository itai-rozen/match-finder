import React from 'react'
import './counter.css'

export default class Counter extends React.Component {
    render(){
        return <div>
            <img src="\thumb.png" alt="" className={"counter-img " + (this.props.isDown && "rotated")} />
            <div className="counter">{this.props.counts}</div>
        </div>
    }
}