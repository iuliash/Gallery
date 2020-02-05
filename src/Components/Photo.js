import React from 'react'

export default function Photo(props){
    return(
        <div className='photo'>
            <img 
            id={'i' + props.photo.id}
            className='photo__img' 
            src={props.photo.img}
            onClick={e => {props.click(props.photo.id, e.clientX, e.clientY)}}
        />
        </div>
    )
}