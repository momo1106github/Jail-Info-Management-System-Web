import Header from './Header';
import LinkButton from './LinkButton';
import Navbar from "./Navbar/Navbar";
import Button from './Button'
import Search from './Search/search';
import SearchBar from './Search/search';
import { useState } from 'react';

const inmates = [
  {id: '1', name: 'Brandon Altamirano'},
  {id: '2', name: 'Kyle Jones'},
  {id: '3', name: 'Raul Garcia'},
];

const filterInmates = (inmates, query) => {
  if (!query) {
    return inmates;
  }
  return inmates.filter((inmate) => {
    const inmateName = inmate.name.toLowerCase();
    return inmateName.includes(query);
  })
}
const HomePage = () => {
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredInmates = filterInmates(inmates, searchQuery);
  return (
      <div className= "HomePage">
        <Navbar />
        <br/>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <ul>
          {filteredInmates.map((inmate) => (
            <li key={inmate.id}>{inmate.name}</li>
          ))}
        </ul>
    </div>
    )
}
export default HomePage