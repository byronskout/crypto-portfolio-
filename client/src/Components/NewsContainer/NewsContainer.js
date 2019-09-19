import React from "react";
import "./NewsContainer.css";
import NewsCard from "./NewsCard/NewsCard";

class NewsContainer extends React.Component {
  state = {
    news: []
  };

  async componentDidMount() {
    const request = await fetch(
      "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
    );
    const response = await request.json();
    const filteredNews = response.Data.slice(0, 6);
    this.setState({
      news: filteredNews
    });
  }

  render() {
    const { news } = this.state;
    return (
      <div>
        <h2>Latest Crypto NewsContainer</h2>
        <div className="newsContainer">
          {news.map(item => {
            return <NewsCard news={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default NewsContainer;
