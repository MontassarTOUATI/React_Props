import React, { Component } from "react";

class ArticleCard extends Component {
  render() {
    const { id, title, subtitle, image } = this.props.data;

    return (
      <div className="singleCard">
        <img src={image} alt={title} />
        <div>
          <h2>{id}</h2>
          <br />
          <h4>{title}</h4>
          <br />
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
