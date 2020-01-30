import React from 'react'

export default class IncreasePhoto extends React.Component{
    constructor(props){
        super(props);

        this.index = 0;

        this.boxRef = React.createRef();
        this.imgRef = React.createRef();
    }
    
    componentDidMount(){
        const photos = this.props.photos;
        this.index = photos.map(photo => photo.id).indexOf(this.props.firstPhoto);
        this.boxRef.current.style.left = this.props.coord - 100 + 'px';
        this.boxRef.current.className = 'increase-photo';
        setTimeout(()=>{
            this.boxRef.current.style.left = 0 + 'px';
            this.boxRef.current.className = 'increase-photo center'
        }, 1);
        setTimeout(()=>{
            this.imgRef.current.className = 'increase-photo__img img-max'
            this.boxRef.current.className = 'increase-photo center max'
        }, 1000);
    }

    changePhoto = () => {
        const photos = this.props.photos;
        if (this.index === photos.length - 1) {
            this.index = 0;
        } else {
            this.index++; 
        }   
        this.imgRef.current.src = photos[this.index].img;
    }

    render(){
        const photos = this.props.photos;
        const index = photos.map(photo => photo.id).indexOf(this.props.firstPhoto);
        return(
            <div ref={this.boxRef} id='box'>
                <img className='increase-photo__img' 
                    src={photos[index].img} 
                    ref={this.imgRef} 
                    onClick={this.changePhoto}
                />
            </div>
        )
    }
}