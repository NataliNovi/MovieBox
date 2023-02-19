import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.scss';

export default function Home(props) {

console.log(props.genres);
console.log(props.countries);



//axios
// const getList = async () => {
// 	const res = await axios.get(
// 		`https://kinopoiskapiunofficial.tech/api/v2.2/films/301`,
// 		{
//       headers: {
//         'X-API-KEY': '484adc53-f3af-4f18-b1ba-5eaf47d68bcd', 
//         'Content-Type': 'application/json',
//     },
// 		}
// 	);
//   console.log(res.data)
// 	return res.data;
// };

// getList();



//fetch
// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
//   method: 'GET',
//   headers: {
//       'X-API-KEY': '484adc53-f3af-4f18-b1ba-5eaf47d68bcd',
//       'Content-Type': 'application/json',
//   },
// })
//   .then(result => result.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))
//   console.log('failed');




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
        </div>
    
   
   //{props.genres.map(genres=>genres.genre)}
   

    )





}

