import './App.css';
import Header from './components/layout/Header';
import SearchCuisines from './components/Search/SearchCuisines';
import MealItem from './cuisines/MealItem';
import PopularCuisines from './cuisines/PopularCuisines';

function App() {
  return(
    <>
   <Header/>
   <SearchCuisines/>
   {/* <PopularCuisines/> */}
   <MealItem/>
    
    </>
  )
}

export default App;
