import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesDetailes from "./components/moviesDetails/Movies";
function App() {
  const [data, setData] = useState([]);

  // this function get data form api link
  const getApi = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
      );
      setData(res.data.results);
    } catch (err) {
      console.error("Error in fetching data : ", err);
    }
  };
  console.log(data);
  
  // this function get count pages
  const getPage = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
      );
      setData(res.data.results);
    } catch (err) {
      console.error("Error in fetching data : ", err);
    }
  };

  // this function search in api
  const searchFilm = async (word) => {
    if (word === "") {
      getApi();
    } else {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
        );
        setData(res.data.results);
      } catch (err) {
        console.console.error("Error in fetching data", err);
      }
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar fnSearch={searchFilm} />
        <Routes>
          <Route
            path="/"
            element={<Card dataCard={data} fnGetPage={getPage} />}
          />
          <Route path="/show/:id" element={<MoviesDetailes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
