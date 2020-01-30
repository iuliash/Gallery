import React from 'react'

import i1 from '../img/1.jpg'
import i2 from '../img/2.jpg'
import i3 from '../img/3.jpg'
import i4 from '../img/4.jpg'
import i5 from '../img/5.jpg'
import close from '../img/close.svg'

import Photo from './Photo'
import IncreasePhoto from './IncreasePhoto'

let x;


class Gallery extends React.Component {
    constructor(){
        super();

        this.state = {
            photos: [
                {id: 1, img: i1}, 
                {id: 2, img: i2},
                {id: 3, img: i3},
                {id: 4, img: i4},
                {id: 5, img: i5}
            ], 
            isIncrease : false,
            firstPhoto : 0
        }
    }

    increasePhoto = (id, coords) => {
        this.setState({isIncrease : true, firstPhoto : id});
        x = coords;
    }

    closePhoto = id => {
        console.log(close);
    }

    render(){
        const photos = this.state.photos;
        const isIncrease = this.state.isIncrease;
        return(
            <div>
                {isIncrease && <IncreasePhoto 
                    photos={photos}
                    firstPhoto={this.state.firstPhoto}
                    close={this.closePhoto}
                    coord = {x}
                />}
                <div className='gallery'>
                    {photos.map(photo => (
                        <Photo  
                        photo={photo} 
                        key={photo.id}
                        click={this.increasePhoto}
                        isMax={this.state.isIncrease}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;