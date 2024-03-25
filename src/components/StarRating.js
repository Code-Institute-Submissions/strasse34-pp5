import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// make user able to rate a post while commenting by selecting stars
const StarRating = ({ value, handleChange }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= value ? solidStar : regularStar}
          style={{
            color: star <= value ? "gold" : "gray",
          }}
          onClick={() => handleChange(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
