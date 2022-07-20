
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import CountryPage from './components/countryPage/CountryPage';
import Loading from './components/loading/Loading';
import SearchPage from './components/searchPage/SearchPage';
import {useTheme} from './hooks/useTheme'
function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/countryPage/:alpha2Code' element={<CountryPage/>}/>
            <Route path='/searchPage' element={<SearchPage/>
          }/>
          </Routes>
        </Router>
        
        
    </div>
  );
}

export default App;
