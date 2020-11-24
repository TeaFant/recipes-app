import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import SearchBar from './components/SearchBar';
import Recipe from './components/Recipe';
import Pagination from './components/Pagination';
import spinner from './spinner.gif';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recPerPage] = useState(4);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
    .then(response=>response.json())
      .then((data)=> { 
        setIsLoading(true);
        setRecipes(data); }) 
  }, [] )
 
  const list = recipes.filter(singleRecipe => {
      const lowerCaseSearch = search.toLowerCase();
      if(singleRecipe.name.toLowerCase().includes(lowerCaseSearch)){
        return true;
      }
    const searchIsInSteps = singleRecipe.steps
      .some(s => s.toLowerCase().includes(lowerCaseSearch));  
      return searchIsInSteps;
      }).map(rec => (<Recipe 
        key={rec.name} 
        name={rec.name}
        steps={rec.steps}
        image={rec.imageURL}
        link={rec.originalURL}/>)
      );

  const indexOfLastRec = currentPage * recPerPage;
  const indexOfFirstRec = indexOfLastRec - recPerPage;
  const currentRec = list.slice(indexOfFirstRec, indexOfLastRec);
  
  const display = list.length ? currentRec : <NoMatch search={search}/>;
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
          {/* tu ide sadržaj koji se odmah vidi */}
            <SearchBar 
              search={search} 
              setSearch={setSearch}
              setCurrentPage={setCurrentPage}
            />
            <div className="wrapper">
              {isLoading ? display
                     : <img src={spinner} alt="spinner" />
                     }
            </div>
            <Pagination recPerPage={recPerPage}
                        totalRec={list.length}
                        paginate={paginate} />
          </React.Fragment>
        )} />
        <Route path="/about" component={AboutMe} />
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
