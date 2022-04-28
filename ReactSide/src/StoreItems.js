//displays all items for specific store


import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function StoreItems() {
    const {store_id} = useParams();

    const fetchTest = async () => {


        // eslint-disable-next-line
        let resp = await fetch(`http://localhost:3001/stores/` + `${store_id}` + '/items/');
        return await resp.json();
    };

    const getData = () => {
        Promise.all([
            fetchTest()
            
        ])
            .then((response => response.forEach((resp) => {
            setItems([]);
            resp.forEach((item) => {
                let link = `/stores/${store_id}/items/${item._id}`;
                setItems(items => [...items, <>
                    <Link className="link" to={link}>{item.name}</Link>
                    </>]);
            });
        })));
    };

    const [items, setItems] = useState(() => {getData(); return [];});

    let button_link = `/stores/${store_id}/items/new`;

    return (
        <>
            <ul style={{backgroundcolor: "lightred"}}>
            {items.map(function(name, index) {
                return <li class = "Store" style={{textDecoration: 'none'}} key={index}>{name}</li>
            })}
            </ul>
        

            <a className="add" href={button_link} style={{color: "orange", border: "4px solid"}}>Add New Item</a>
        </>
    );
}

export default StoreItems;
