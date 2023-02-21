// import styles from './App.module.scss';
import './App.scss';
import React, {useState, useEffect} from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
NavLink,
Navigate
} from 'react-router-dom';
import axios from 'axios'
import logo from './assets/photo/MovieBox.jpg'
//import {Home,Film,Cartoon,Series,Show,Error} from './Pages';
import Home from './Pages/Home';
import Categories from './components/Categories/Categories'


function App(props) {

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

let filmsList = require('./assets/data/top1.json');
// console.log(filmsList[0].filmId);
// console.log(filmsList[0].genres[0].genre);


//const {id, posterUrl, filmId, nameRu, nameEn, country, genre, year} = props;

const [currentFilmsList, setCurrentFilmsList] = useState('');

const[year, setYear] = useState('')

const chooseYear = (year) => {
  //console.log(year);
  
  setYear({
    currentFilmsList: filmsList.filter(el=>el.year === year)
  })

}




  return (

<>
<header className="header">
{/* <h1 className="header__slogan">MovieBox</h1> */}
<Link className="header__slogan" to="/slogan">MovieBox: Develop and Fun</Link>
{/* <NavLink className="header__link" to='/'>Home</NavLink> */}
{/* <NavLink className="header__link" to='/film'>Films</NavLink>
<NavLink className="header__link" to='/cartoon'>Cartoons</NavLink>
<NavLink className="header__link" to='/series'>Series</NavLink>
<NavLink className="header__link" to='/show'>Show</NavLink> */}
<Link to="/logo"><img className="header__logo" src={logo} alt="logo"/></Link>
</header>


<Routes>
<Route path ='/slogan' element={<Navigate to='/'/>}/>
{/* <Route path='/' element={<Home/>}/> */}
{/* <Route path='/film' element={<Film/>}/>
<Route path='/cartoon' element={<Cartoon/>}/>
<Route path='/series' element={<Series/>}/>
<Route path='/show' element={<Show/>}/>
<Route path='*' element={<Error/>}/> */}
<Route path ='/logo' element={<Navigate to='/'/>}/>

</Routes>

<p className='popular'>POPULAR</p>

<Categories chooseYear={chooseYear}/>



{/* <div className='button-container'>

<button className='button__filter' data-filter="комедия" value="comedy" >Comedy</button>
<button className='button__filter' data-filter="фэнтези" value="fantasy">Fantasy</button>
<button className='button__filter' data-filter="драма" value="drama">Drama</button>
<button className='button__filter' data-filter="приключения" value="adventure">Adventure</button>
<button className='button__filter' data-filter="семейный" value="family">Family</button>
<button className='button__filter' data-filter="криминал" value="crime">Crime</button>

</div> */}


<div className='cards-container'>
  {filmsList.map(film=>(
  <Home className='card' key={film.id} poster={film.posterUrl} id={film.filmId} title={film.nameRu} titleEng={film.nameEn} countries={film.countries.map(countries=>countries.country)} genres={film.genres.map(genres=>genres.genre)} year={film.year} > 
      <Link to={`/home/${film.filmId}`}>{film.nameRu}</Link>
  </Home>
))}

</div>



</>




);
}




  

export default App;



