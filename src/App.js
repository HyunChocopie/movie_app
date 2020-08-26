import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    //console.log(movies)
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loadeer__text">Loading...</span>
        </div>
      ) : (
          <div className="movies">
            {movies.map(movie => (<Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres} />)
            )}
          </div>
        )}</section>
  }
}


export default App;


// //function Food(props) {
// //console.log(props.fav)
// function Food({ name, picture, rating }) {
//   return <div>
//     <h2>i like {name}</h2>
//     <h4> {rating}/5.0</h4>
//     <img src={picture} art={name} />
//   </div>
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "topokki",
//     image: "https://i.pinimg.com/originals/64/2e/04/642e04e42beaeb2e1dad293de3cc8668.png",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "bibimbap",
//     image: "https://minimalistbaker.com/wp-content/uploads/2019/05/Bibimbap-SQUARE-500x375.jpg",
//     rating: 3.5,
//   },
//   {
//     id: 3,
//     name: "kimbap",
//     image: "",
//     rating: 4,
//   },
// ]

// function renderFood(dish) {
//   console.log(dish)
//   return <Food name={dish.name} picture={dish.image} rating={dish.rating} />
// }

// function App() {
//   return (
//     <div className="App">

//       {/* <Food
//         fav="kimchi"
//         //something={true} 
//         //papapapa={["hello",1,2,3,4,true]}
//       /> */}
//       {foodILike.map(dish =>
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating} />)
//       }
//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

// export default App;


