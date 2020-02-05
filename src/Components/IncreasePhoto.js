import React from 'react'

import close from '../img/close.svg'


let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let centerW = width / 2;
let centerH = height / 2;

export default class IncreasePhoto extends React.Component{
    constructor(props){
        super(props);

        this.index = 0;

        this.boxRef = React.createRef();
        this.imgRef = React.createRef();
        this.closeRef = React.createRef();
    }
    
    componentDidMount(){
        const photos = this.props.photos;
        this.index = photos.map(photo => photo.id).indexOf(this.props.firstPhoto);
        this.boxRef.current.style.position = 'absolute';
        this.boxRef.current.style.left = this.props.coordX - 100 + 'px';
        this.boxRef.current.style.top = this.props.coordY + document.documentElement.scrollTop - 60 + 'px';
        this.boxRef.current.style.zIndex = 100;
        setTimeout(()=>{
            this.boxRef.current.className = 'increase-photo';
        }, 0.5);
        setTimeout(()=>{
            this.boxRef.current.style.left = centerW - 100 + 'px';
            this.boxRef.current.style.top = centerH - 60 + 'px';   
        }, 1);
        setTimeout(()=>{
            this.boxRef.current.style.left = 0 + 'px';
            this.boxRef.current.style.top = document.documentElement.scrollTop + 'px';
            this.imgRef.current.className = 'increase-photo__img img-max';
            this.closeRef.current.style.display = 'inline';
            this.closeRef.current.style.top = document.documentElement.scrollTop + 10 + 'px';
            this.boxRef.current.style.height = '100vh';
            this.boxRef.current.style.width = '100vw';
            this.boxRef.current.style.backgroundColor = 'rgb(143, 143, 143)';
            document.body.style.overflow = 'hidden';
             
        }, 1001);
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

    closePhoto = () => {
        setTimeout(()=>{
            this.imgRef.current.className = 'increase-photo__img';
            this.closeRef.current.style.display = 'none';
            document.body.style.overflow = 'auto';
            this.boxRef.current.style.backgroundColor = 'transparent';
            this.boxRef.current.style.left = centerW - 100 + 'px';
            this.boxRef.current.style.top = centerH - 60 + 'px'; 
        }, 1);
        setTimeout(()=>{
            this.boxRef.current.className = 'increase-photo';
            this.boxRef.current.style.left = this.index * 21 + 'vw';
            this.boxRef.current.style.top = this.props.coordY + document.documentElement.scrollTop - 70 + 'px';
        }, 1003);
        setTimeout(()=>{
            this.props.close();
        }, 2003);
    }

    render(){
        const photos = this.props.photos;
        const index = photos.map(photo => photo.id).indexOf(this.props.firstPhoto);
        return(
            <div>
                <div ref={this.boxRef} id='box'>
                    <img className='increase-photo__img' 
                        src={photos[index].img} 
                        ref={this.imgRef} 
                        onClick={this.changePhoto}
                    />
                </div>
                <img 
                    src={close} 
                    className='close-img' 
                    onClick={this.closePhoto}
                    ref={this.closeRef}
                />
            </div>
        )
    }
}