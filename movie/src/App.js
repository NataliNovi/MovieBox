// import styles from './App.module.scss';
import './App.scss';
import React from 'react';
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
import Filter from './components/Filter/Filter';
import { PureComponent } from 'react';



let filmsList = require('./assets/data/top1.json');
    
//console.log(filmsList[0].year);
//console.log(filmsList[0].genres[0].genre);
// let a = filmsList.map(film => film.year)
// console.log(a)


export default class App extends PureComponent {

  
  
  constructor(props) {
    super(props)
    this.state = {
    filmsList: [...filmsList],
    currentFilmsList: [],
    userInput: '',
    filteredFilmsList: [],
   
    
  
    }
    this.state.currentFilmsList=this.state.filmsList;
    this.chooseYearHandleClick=this.chooseYearHandleClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.state.currentUserInput=this.state.userInput;
   
  
    //console.log(this.state.currentFilmsList);
  }



// получаем данные с сервера при помощи axios
//   componentDidMount() {

//   this.getList();}

//  getList = async () => {
// 	const list = await axios.get(
// 		`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
// 		{
//       headers: {
//         'X-API-KEY': '484adc53-f3af-4f18-b1ba-5eaf47d68bcd', 
//         'Content-Type': 'application/json',
//     },
// 		}
// 	);
//   this.setState({
//     filmsList: list
//   })
//  console.log(this.state.filmsList);

//  if(!filmsList) {
//   return <h1>Loading...</h1>
//  }

// };




// получаем данные с сервера при помощи fetch

// componentDidMount() {

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

//   console.log(this.state.filmsList[0].year)
// }



render() {

  return (

<>
<header className="header">
<Link className="header__slogan" to="/slogan">MovieBox: Develop and Fun</Link>
<Link to="/logo"><img className="header__logo" src={logo} alt="logo"/></Link>

</header>


<Routes>
<Route path ='/slogan' element={<Navigate to='/'/>}/>
<Route path ='/logo' element={<Navigate to='/'/>}/>

</Routes>


<p className='popular'>POPULAR</p>

<Categories chooseYearHandleClick={this.chooseYearHandleClick}/>

<div className="search__form">
    <input className="search__input"
      type="text"
      placeholder="слово из названия фильма на русском языке"
      value={this.state.userInput}
      onChange={this.updateInput}
    />

    <input  className="search__button" type="submit" value="Search" onClick={this.onSubmit}/> 
  </div>

  {/* <div className='=filtered'>
    {this.state.filteredFilmsList[0].nameRu}
  </div> */}

  {/* <div className='filtered-container'>
  {this.state.filteredFilmsList.map(film=>(
  <Filter className='card' key={film.filmId} poster={film.posterUrl} id={film.filmId} title={film.nameRu} titleEng={film.nameEn} countries={film.countries.map(countries=>countries.country)} genres={film.genres.map(genres=>genres.genre)} year={film.year} addInfoHandleClick={this.addInfoHandleClick} > 
  </Filter>
))}
</div> */}

<div className='filtered-container'>
  {this.state.filteredFilmsList.map(film=>(
      // <Filter className='card' title={this.state.filteredFilmsList[0].nameRu} > </Filter>
      <Filter className='card' title={film.nameRu} > </Filter>

  ))}

</div>






<div className='cards-container'>
  {this.state.currentFilmsList.map(film=>(
  <Home className='card' key={film.filmId} poster={film.posterUrl} id={film.filmId} title={film.nameRu} titleEng={film.nameEn} countries={film.countries.map(countries=>countries.country)} genres={film.genres.map(genres=>genres.genre)} year={film.year} addInfoHandleClick={this.addInfoHandleClick} > 
  </Home>
))}

</div>

</>
  )}

  chooseYearHandleClick = (year) => {
    if(year === 'all') {
      this.setState({currentFilmsList: this.state.filmsList})
      return
    }
    console.log(year);
    this.setState({
      currentFilmsList: this.state.filmsList.filter(el=>el.year === year)
    })

    }

    updateInput(e) {
      this.setState({userInput: e.target.value});
    }
    
    onSubmit() {
      const text = this.state.userInput;
      console.log(text)

      const filteredFilmsList = filmsList.filter(film => {
        return film.nameRu.toLowerCase().includes(text.toLowerCase())
        //return film.nameEn.toLowerCase().includes(text.toLowerCase())
     
      })

      console.log(filteredFilmsList);
      alert(filteredFilmsList[0].nameRu);

    }
}

