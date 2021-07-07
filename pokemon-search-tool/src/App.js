import './App.css';
import { useState } from 'react';
import { PokemonCardList } from './Pokemon';
import ScrollToTop from './ScrollToTop';
import { Searchbar } from "./Searchbar";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
      <PokemonCardList searchQuery={searchQuery} />
      <ScrollToTop />
    </div>
  );
}

export default App;
