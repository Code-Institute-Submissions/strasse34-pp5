import React from "react";
import StarRating from "./StarRating";

// makes user able to edit their ratings through stars while editing a comment
const EditStars = ({ value, handleChange }) => {
  const handleStarChange = (star) => {
    handleChange(star); 
  };

  return (
    <StarRating
      value={value}
      name="editStars"
      handleChange={handleStarChange}
    />
  );
};

export default EditStars;
