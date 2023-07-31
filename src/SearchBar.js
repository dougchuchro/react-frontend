import { useState } from "react";

function SearchBar({ filterBrands, onBrandCheckboxChange }) {
    console.log("Brands MapQ: ");
    console.log(typeof filterBrands);

    const handleCheckboxChange = (position, isChecked) => {
        const updatedItem = filterBrands[position]
        updatedItem.display = isChecked
        const updatedCheckedState = filterBrands.map((brand, index) =>
            index === position ? updatedItem : brand
        );
        onBrandCheckboxChange(updatedCheckedState);
    };

    return (
        <>
            {filterBrands.map((brand, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            name={brand.id}
                            id={brand.id}
                            checked={brand.display}
                            onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                        />
                        {brand.brandName}
                    </label>
                </div>
            ))}
        </>
    );
}

export default SearchBar;