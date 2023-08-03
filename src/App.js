import { useState } from 'react';
import './App.css';
import GapJapanStores from './GapJapanStoreAddress.json';
import SearchBar2 from './SearchBar2';
import StoresList2 from "./StoresList2";

// Gap Japan Stores JSON file to stores array
const stores = GapJapanStores.features;

// Parse store data to great a list of all Brands
const brandsMap = new Map(stores.map(store => [store.properties.BRAND_CODE, { brandName: store.properties.BRAND, display: true }]));
// Add the Store Count to each brand
brandsMap.forEach((brand, key, map) => {
  brand.storeCount = (stores.filter(s => s.properties.BRAND_CODE === key).length);
  brandsMap.set(key, brand);
});
console.log("Brands Filter Map: ");
console.log(brandsMap);

export default function App() {
  const [brands, setBrands ] = useState(brandsMap);
  return (
    <>
      <SearchBar2 brandsMap={brands} setBrandsMap={setBrands}/>
      <StoresList2 stores={stores} brandsMap={brands}/>
    </>
  );
}
