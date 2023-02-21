import React from 'react'
import './filter.scss'

export default function Filter(props) {

  console.log(props)



  return (
        <div className='filter'>

        <div className='filter__poster-container'>
        <img className='filter__poster' src={props.poster} alt={props.title}/>
        </div>

        <div className='filter__description'>
        <div className='filter__nameEng'> {props.titleEng}</div>
        {/* <div className='card__year'> {props.year}, {props.countries[0]} {props.countries[1]} {props.countries[2]}</div>
    */}
        {/* <div className='card__genres'>{props.genres[0]} {props.genres[1]} {props.genres[2]} {props.genres[3]} {props.genres[4]} {props.genres[5]}</div> */}
        </div> 
      
        </div>
  )
}
