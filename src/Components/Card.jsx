
import React from "react";
import "./Card.css"
const Card = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" ><b>{item.head}</b></h5>
          <h5>{item.subhead}</h5>
          <p className="card-text">{item.content}</p>
          <a href="#" className="btn btn-primary text-center">
            Let's Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;