import React from "react";
import "./NewsCard.css";

const NewsCard = ({ news }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={news.imageurl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.body}</p>
        <a href={news.url} target="_blank" className="btn btn-primary">
          Go To Article
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
