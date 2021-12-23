import React from 'react'
import Counter from '../Counter/Counter'
import './countersBar.css'

export default class CountersBar extends React.Component {
    render(){
        return <ul className='list-container'>
            <li><Counter isDown={false} counts={this.props.likes} /></li>
            <li><Counter isDown={true} counts={this.props.dislikes} /></li>
        </ul>
    }
}