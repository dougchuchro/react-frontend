function StoresTable({ stores, filterBrands }) {
    console.log(filterBrands);
    const rows = [];
    stores.forEach((store) => {
        rows.push(
            <StoreRow store={store} key={store.properties.STORE_NUM} />
        )
    });
    return (
        <>
            <div>{filterBrands[0].display.toString()}</div>
            <table>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Store Address</th>
                    </tr>
                </thead>
                {/* <tbody>{rows}</tbody> */}
                <tbody>
                    {stores.map(store => (
                        <tr>
                            <td>{store.properties.STORE_NAME}</td>
                            <td>{store.properties.ADDRESS_JA}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function StoreRow({ store }) {
    return (
        <tr>
            <td>{store.properties.STORE_NAME}</td>
            <td>{store.properties.ADDRESS_JA}</td>
        </tr>
    );
}

export default StoresTable;