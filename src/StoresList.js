export default function StoresList({ stores, filterBrands }) {

    const brandsIds = filterBrands.filter(brand => brand.display === true).map(brand => brand.id);
    console.log(brandsIds);

    const filteredStores = stores.filter(store =>
        brandsIds.some((id) => id === store.properties.BRAND_CODE)
    );

    const listStores = filteredStores.map(store =>
        <li key={store.properties.STORE_NUM}>
            <p>
                <b>{store.properties.BRAND}:</b>
                {' ' + store.properties.STORE_NAME + ' '}
            </p>
        </li>
    );

    return <ul>
        {listStores}
    </ul>
}
