import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import WatchList from './component/WatchList/WatchList';
import Movie from './pages/MovieDetail/Movie';

function App() {
  return (
    <div className="App">
       
          <Navbar />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<WatchList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
    </div>
  );
}

export default App;