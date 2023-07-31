import { useState } from 'react';
import './App.css';
import GapJapanStores from './GapJapanStoreAddress.json';
import SearchBar2 from './SearchBar2';
import StoresList2 from "./StoresList2";
// import SearchBar from './SearchBar';
// import StoresTable from "./StoresTable";
// import StoresList from "./StoresList";

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

// const brandsArray = Array.from(brandsMap, function (entry) {
//   return { id: entry[0], brandName: entry[1].brandName, display: entry[1].display, storeCount: entry[1].storeCount };
// });
// console.log("Brands Array: ");
// console.log(brandsArray);

export default function App() {
//  const [filterBrands, setFilterBrands] = useState(brandsArray);
  const [brands, setBrands ] = useState(brandsMap);
//  const [storesDisplay, setStoresDisplay] = useState(stores);
  return (
    <>
      <SearchBar2 brandsMap={brands} setBrandsMap={setBrands}/>
      {/* <SearchBar filterBrands={filterBrands} onBrandCheckboxChange={setFilterBrands}  /> */}
      <StoresList2 stores={stores} brandsMap={brands}/>
      {/* <StoresList stores={stores} filterBrands={filterBrands}/> */}
    </>
  );
}
