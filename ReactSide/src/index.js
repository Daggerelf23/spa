import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './HomeScreen';
import Stores from './Stores';
import StoreItem from './StoreItems';
import ItemInfo from './ItemInfo';
import CreateNewItem from './CreateNewItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}>
          <Route index element={<Home />} />
          <Route path="/stores">
            <Route index element={<Stores />} />
            <Route path="/stores/:store_id">
              <Route index element={<StoreItem />} />
              <Route path="/stores/:store_id/items">
                <Route index element={<StoreItem />} />
                <Route path="/stores/:store_id/items/:items_id" element={<ItemInfo />} />
                <Route path="/stores/:store_id/items/new" element={<CreateNewItem />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

