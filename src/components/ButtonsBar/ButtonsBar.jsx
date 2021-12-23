import React from 'react'
import Button from '../Button/Button'
import './buttonsBar.css'

export default class ButtonsBar extends React.Component {
    render(){
        // <i class="far fa-smile-beam"></i>
        // 
        return <ul className='list-container'>
            <li>
                <Button incrementCounter={this.props.incrementCounter}
                        getNextImage={this.props.getNextImage}
                        counterType="likes"
                        icon="smile-beam"  />
            </li>
            <li>
                <Button incrementCounter={this.props.incrementCounter}
                        getNextImage={this.props.getNextImage}
                        counterType="dislikes"
                        icon="sad-tear"  />
            </li>
        </ul>
    }
}