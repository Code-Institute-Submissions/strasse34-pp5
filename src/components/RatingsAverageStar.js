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
      const decimalPart = filledStars - fullStars;

      // Generate full stars
      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <i key={i} className="fas fa-star" style={{ color: "gold" }}></i>
        );
      }

      // Determine the appropriate icon for the decimal part
      if (decimalPart > 0.75) {
        stars.push(
          <i key="half" className="fas fa-star" style={{ color: "gold" }}></i>
        );
      } else if (decimalPart > 0.5) {
        stars.push(
          <i
            key="three-quarters"
            className="fas fa-star-three-quarters"
            style={{ color: "gold" }}
          ></i>
        );
      } else if (decimalPart > 0.25) {
        stars.push(
          <i
            key="half"
            className="fas fa-star-half-alt"
            style={{ color: "gold" }}
          ></i>
        );
      } else if (decimalPart > 0) {
        stars.push(
          <i
            key="quarter"
            className="fas fa-star-quarter"
            style={{ color: "gold" }}
          ></i>
        );
      }

      // Generate empty stars for the remaining positions
      for (let i = fullStars + 1; i < 5; i++) {
        stars.push(
          <i key={i} className="far fa-star" style={{ color: "gray" }}></i>
        );
      }
    }

    return stars;
  };

  return <div>{generateStars()}</div>;
};

export default RatingsAverageStar;
