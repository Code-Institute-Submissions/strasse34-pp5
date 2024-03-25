import React from "react";

// provides choices for brand input field in PostCreateForm
const BrandChoices = () => {
  const theBrands = [
    { value: "", label: "Select a brand", disabled: true },
    { value: "Toyota", label: "Toyota" },
    { value: "Ford", label: "Ford" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Honda", label: "Honda" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "BMW", label: "BMW" },
    { value: "Audi", label: "Audi" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Nissan", label: "Nissan" },
    { value: "Kia", label: "Kia" },
    { value: "Subaru", label: "Subaru" },
    { value: "Mazda", label: "Mazda" },
    { value: "Tesla", label: "Tesla" },
    { value: "Lexus", label: "Lexus" },
  ];

  return (
    <>
      {theBrands.map((brand, index) => (
        <option key={index} value={brand.value}>
          {brand.label}
        </option>
      ))}
    </>
  );
};

export default BrandChoices;
