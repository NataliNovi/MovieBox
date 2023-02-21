import React from 'react'

import './home.scss';


export default function Home(props) {

   // console.log(props)

  
   
     
    return (
    
        <div className='card'>

        <div className='card__poster-container'>
        <img className='card__poster' src={props.poster} alt={props.title}/>
        </div>

        <div className='card__description'>
        <div className='card__nameEng'> {props.titleEng}</div>
        <div className='card__year'> {props.year}, {props.countries[0]} {props.countries[1]} {props.countries[2]}</div>
   
        <div className='card__genres'>{props.genres[0]} {props.genres[1]} {props.genres[2]} {props.genres[3]} {props.genres[4]} {props.genres[5]}</div>
        </div>
        <button className='card__button' onClick={()=>props.loadFilmData()}>Learn More</button>
        </div>


    )





}

