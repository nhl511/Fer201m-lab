import React, { Component, useState } from 'react'
import { filmsData } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserProvider } from './useContext';

// export default class Main extends Component {
//     constructor(){
//         super();
//         this.state = {
//             films: films
//         };
//     }
//   render() {
//     return (
//       <div>
//         <FilmsPresentation films={this.state.films}/>
//       </div>
//     )
//   }
// }


export default function Main() {
  const [films, setFilms] = useState(filmsData)
  const { theme, toggle, dark } = useContext(ThemeContext)

  return (

    <div        
    style={{ 
      backgroundColor: theme.backgroundColor, 
    }}>
      <FilmsPresentation films = {films}/>
    </div>

  )
}
