import React from "react";
import { Link } from "react-router-dom";
import "./showCard.css";

const ShowCard = (props) => {
    const { show } = props;
    
    return (
        <Link to={`/details/${show.id}`} className="col-sm-12 col-md-4" >
            <div className="card show-card">
                <img className="card-img-top" src={show.originalImage} alt={show.name} />
                <div className="card-body">
                    <p className="card-text">{show.name}</p>
                </div>
            </div>
         </Link>
    )
}

export { ShowCard };