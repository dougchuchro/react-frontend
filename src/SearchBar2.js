function SearchBar2(props) {
    const handleCheckboxChange = (key, isChecked) => {
        let updatedBrand = props.brandsMap.get(key);
        updatedBrand.display = isChecked;
        props.setBrandsMap(new Map(props.brandsMap.set(key, updatedBrand)));
    };

    return (
        <>
            {
                [...props.brandsMap.keys()].map(k => (
                    <div key={k}>
                        <label>
                            <input
                                type="checkbox"
                                name={k}
                                id={k}
                                checked={props.brandsMap.get(k).display}
                                onChange={(e) => handleCheckboxChange(k, e.target.checked)}
                            />
                            {props.brandsMap.get(k).brandName} ({props.brandsMap.get(k).storeCount})
                        </label>
                    </div>
                ))
            }
        </>
    );
}

export default SearchBar2;