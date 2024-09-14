import { Link, useParams } from "react-router-dom";
import "./Movies.css";
import axios from "axios";
import { useEffect, useState } from "react";

const MoviesDetailes = () => {
  const ID = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${ID.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
      );
      setMovie(res.data);
    } catch (err) {
      console.error("Error in fetching data", err);
    }
  };
  console.log(movie.homepage);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="row my-5">
      <div className="col-12">
        <div className="all_Data">
          <div className="img-id col-lg-6 col-md-12 col-sm-12">
            <img
              style={{ borderRadius: "15px" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="text-id col-lg-6 col-md-12 col-sm-12">
            <h3>اسم الفيلم : {movie.title} </h3>
            <p>تاريخ الفيلم :{movie.release_date}</p>
            <p> عدد المقيمين :{movie.vote_count}</p>
            <p> التقييم :{movie.vote_average}</p>

            <div className="col-12 btn_link my-4 ">
              <Link to={"/"}>عوده الي الرئيسه </Link>
              <a href={movie.homepage}>مشاهدة الفيلم </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 stroy my-5">
        <h4 style={{ fontSize: "40px", fontWeight: "bold", margin: "15px 0" }}>
          القصه :
        </h4>
        <p style={{ fontSize: "25px" }}>
          {" "}
          {movie.overview === "" ? (
            <span>القصه غير متاحه في API </span>
          ) : (
            movie.overview
          )}{" "}
        </p>
      </div>
    </div>
  );
};

export default MoviesDetailes;
