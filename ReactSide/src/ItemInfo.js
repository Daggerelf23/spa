
import { useParams} from 'react-router-dom';
import { useState } from 'react';
function ItemInfo() {
    const {store_id, items_id} = useParams();

    const fetchTest = async () => {
        let url = `http://localhost:3001/stores/` + `${store_id}` + '/items/' + `${items_id}`;
        let resp = await fetch(url);
        return await resp.json();
    };

    const getData = () => {
        Promise.all([
            fetchTest()
        ])
            .then((resps => resps.forEach((resp) => {
            setItems([]);
            resp.forEach((item) => {
                let link = `/stores/${store_id}/items/`;
                let display = 
                <>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                </>;

                setItems(items => [...items, display]);
            });
        })));
    };

    const [items, setItems] = useState(() => {getData(); return [];});

    return (
        <>
            {items}
        </>
    );
}
export default ItemInfo;