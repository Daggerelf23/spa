import { Link, Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to ="/" style =  {{textDecoration: 'none', color:"black"}} >Home</Link>
        <Link to ="/stores" style =  {{textDecoration: 'none', color:"black"}}>Stores</Link>
       </header>

       <main>
         <Outlet></Outlet>
       </main>
    </div>
  );
}

export default App;
