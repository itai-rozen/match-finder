import React from 'react'
import './result.css'

export default class Result extends React.Component {
    
    render(){
        const text = this.props.dislikes >= this.props.likes?
        'So you dont like food that much.. please leave this app.':
        'You Love Food! go ahead and treat yourself with a bucket of burgers!'
        return <div className='result-container'>
            <h3>{text}</h3>
            </div>
    }
}