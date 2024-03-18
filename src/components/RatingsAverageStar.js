import React from "react";

const RatingsAverageStar = ({ value }) => {
  const generateStars = () => {
    const stars = [];
    const filledStars = parseFloat(value);

    // If value is null or not defined, return empty stars
    if (!filledStars) {
      for (let i = 0; i < 5; i++) {
        stars.push(
          <i key={i} className="far fa-star" style={{ color: "gray" }}></i>
        );
      }
    } else {
      // Calculate the number of full stars
      const fullStars = Math.floor(filledStars);
      // Calculate the decimal part of the rating
      const remainder = filledStars - fullStars;

      // Generate full stars
      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <i key={i} className="fas fa-star" style={{ color: "gold" }}></i>
        );
      }

      // Add half star if remainder >= 0.25 and < 0.75
      if (remainder >= 0.25 && remainder < 0.75) {
        stars.push(
          <i key="half" className="fas fa-star-half-alt" style={{ color: "gold" }}></i>
        );
      }

      // Add full star if remainder >= 0.75
      if (remainder >= 0.75) {
        stars.push(
          <i key="full" className="fas fa-star" style={{ color: "gold" }}></i>
        );
      }

      // Generate empty stars for the remaining positions
      const remainingStars = 5 - stars.length;
      for (let i = 0; i < remainingStars; i++) {
        stars.push(
          <i key={i + fullStars + 1} className="far fa-star" style={{ color: "gray" }}></i>
        );
      }
    }

    return stars;
  };

  return <div>{generateStars()}</div>;
};

export default RatingsAverageStar;
