import React from "react";
import styles from "../styles/Comment.module.css";

const ShowStarsInCommentList = ({ value }) => {
  const filledStars = parseFloat(value);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<i key={i} className={`fas fa-star ${styles.Star}`}></i>);
    } else {
      stars.push(<i key={i} className={`far fa-star ${styles.Star}`}></i>);
    }
  }

  return <div>{stars}</div>;
};

export default ShowStarsInCommentList;
