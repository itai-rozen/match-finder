import React from 'react'
import ButtonsBar from '../components/ButtonsBar/ButtonsBar'
import CountersBar from '../components/CountersBar/CountersBar'
import Image from '../components/Image/Image'
import Result from '../components/Result/Result'
import imagesApi from './../api'
import './homepage.css'

export default class Homepage extends React.Component {
    state = {images: [], likes: 0, dislikes: 0 ,currImage:''}

    getNextImage = () => {
        const imagesArrCopy = [...this.state.images]
        const nextImage = imagesArrCopy.pop()
        this.setState({images: imagesArrCopy, currImage:nextImage})
    }

    renderImage = () => {
        console.log('this state before renderNextImage : ',this.state)
        if (this.state.images.length){
            const {id, desc, url} = this.state.currImage
            return <Image id={id} description={desc} url={url} />
        } else {
            return <Result likes={this.state.likes} dislikes={this.state.dislikes} />
        }
    }

    componentDidMount = async () => {
        const data = await imagesApi.get()
        const dataObjs = data.data.hits
        const images = dataObjs.map(obj => {
            return { id: obj.id,  desc: obj.tags, url: obj.largeImageURL }
        }) 
        const currImage = images.pop()
        this.setState({images: images, currImage: currImage})
    }



    incrementCounter = (counter) => {
        this.setState( prevState => {
            return { [counter] : prevState[counter]+1}
        })
        console.log('state after updating counter: ', this.state)
    }

    render(){
        return <div>
            <CountersBar />
            {this.renderImage()}
            <ButtonsBar renderNextImage={this.renderNextImage} 
            incrementCounter={this.incrementCounter} 
            getNextImage={this.getNextImage} />

            

        </div>
    }
}