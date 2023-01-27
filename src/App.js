
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Json from "./data/data.json";
import BuyCard from './Components/Main/BuyCard/BuyCard';
import ProductCard from './data/productCard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main data ={Json}/>,
    },
    {
      path:`/item/:productId`,
      element:<BuyCard/>
    }
  ]);

function App() {
  return (
    <div>
      <Header/>
      {/* <Main data ={Json}/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
