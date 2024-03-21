import React from "react";
import StarRating from "./StarRating";

const EditStars = ({ value, handleChange }) => {
  const handleStarChange = (star) => {
    handleChange(star); // Pass the new star value to the parent component
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
