
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Json from "./data/data.json";
import BuyCard from './Components/Main/BuyCard/BuyCard';
import Footer from './Components/Footer/Footer';
import ItemsList from './Components/Main/Categories/Items-list/ItemsList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/React-online-store/",
      element: <Main data ={Json}/>,
    },
    {
      path:`/item/:productId`,
      element:<BuyCard/>
    },
    {
      path:`/categories/:itemId`,
      element: <ItemsList/>
    }
  ]);

function App() {
  return (
    <div>
      <Header/>
      {/* <Main data ={Json}/> */}
      <RouterProvider router={router} />
      <Footer data ={Json.Footer}/>
    </div>
  );
}

export default App;
