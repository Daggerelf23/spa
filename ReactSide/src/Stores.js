//displays a listing of all the stores
import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';


function Store() {

    const fetchstore = async () => {
        let response = await fetch("http://localhost:3001/stores");
        return await response.json();
    }

    const fetchStores = () => {
        Promise.all([
            fetchstore()
        ])

            .then((resp => resp.forEach((response) => {
                    setStores([]);
                    response.forEach((store) => {
                        console.log(store)
                        setStores(stores => [...stores, <>
                            <Link key={store._id} className="link" to={store._id}>{store.name}</Link></>]);
                    });
                })));
        }

    const [stores, setStores] = useState(() => {fetchStores(); return[];})


    return (
        <div>
            <ul style={{backgroundcolor: "lightred"}}>
            {stores.map(function(name, index) {
                return <li class = "Store" style={{textDecoration: 'none'}} key={index}>{name}</li>
            })}
            </ul>
        </div>
    );
    
}

export default Store;
