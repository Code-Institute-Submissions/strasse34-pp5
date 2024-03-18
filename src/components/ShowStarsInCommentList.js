import React from "react";

const ShowStarsInCommentList = ({ value }) => {
  const filledStars = parseFloat(value);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(
        <i key={i} className="fas fa-star" style={{ color: "gold" }}></i>
      );
    } else {
      stars.push(
        <i key={i} className="far fa-star" style={{ color: "gray" }}></i>
      );
    }
  }

  return <div>{stars}</div>;
};

export default ShowStarsInCommentList;
