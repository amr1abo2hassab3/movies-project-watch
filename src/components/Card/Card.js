import PaginationCom from "../pagination/PaginationCom";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (prop) => {
  return (
    <div className="row my-5 text-center">
      {prop.dataCard.length > 0 ? (
        prop.dataCard.map((i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={i.id}>
              <Link to={`/show/${i.id}`}>
                <div className="card-box">
                  <div className="img-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/` + i.poster_path}
                      alt={i.original_title}
                    />
                    <div className="overlayCard">
                      <h2>أسم الفلم : {i.original_title}</h2>
                      <p>تاريخ الاصدار :{i.release_date}</p>
                      <p>عدد المقيمين :{i.vote_count}</p>
                      <p> التقييم :{i.vote_average}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <h3 className="text-center my-5">لايوجد افلام ... </h3>
      )}
      {prop.dataCard.length > 0 ? (
        <PaginationCom fnGetPage={prop.fnGetPage} />
      ) : null}
    </div>
  );
};

export default Card;
