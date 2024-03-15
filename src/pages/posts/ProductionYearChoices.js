import React from 'react';

const ProductionYearChoices = () => {
  // Generate an array of production years from 1990 till 2024
  const productionYears = Array.from({ length: 2024 - 1990 + 1 }, (_, index) => 2024 - index);

  return (
    <>
      <option value="" disabled>Select production year</option>
      {productionYears.map((year, index) => (
        <option key={index} value={year}>{year}</option>
      ))}
    </>
  );
};

export default ProductionYearChoices;
