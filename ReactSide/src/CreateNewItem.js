//displays a form to create a new item. accepts name, quantity, and price. data added to database.
//use POST (located in Items route)
import { useParams } from 'react-router-dom';

import React from 'react'

function NewItem() {

    
    const {store_id} = useParams();

    const createNewItem = async (link, new_item) => {
        console.log(new_item);
        await fetch(link, {
            method: 'POST',
            body: JSON.stringify(new_item),
            mode: 'cors',
            headers: {'Content-type': 'application/json'}
        }); 
    };

    const handleSubmit = (event) => {
        let name = event.target.elements["name"].value;
        let price = event.target.elements["price"].value;
        let quantity = event.target.elements["quantity"].value;

        let new_item = {
            name: name,
            price: price,
            quantity: quantity,
            store_id: store_id,
        };
        
        createNewItem(`http://localhost:3001/stores/${store_id}/items/`, new_item);
        event.preventDefault();
    };
    return (
        <>
        
        <fieldset>Enter Item Information
            <form onSubmit = {handleSubmit}>
            <br></br>
            <label>Name: </label>

            <input  type = "text" name = "name"></input>
            <br></br>
            <label >Quantity: </label>

            <input type = "number" name = "quantity"></input>
            <br></br>
            <label >Price: </label>

            <input type = "text" name = "price"></input>
            <br>
            </br>
            <br></br>

            <button type="submit">Submit</button>
            

            
            </form>
        </fieldset>
        

        </>
    );
}

export default NewItem;