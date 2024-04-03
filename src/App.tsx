/* /src/App.tsx */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.tsx";
import Cart from './views/Cart.tsx';
import Product from "./views/Product.tsx";
import NotFound from "./views/NotFound.tsx";
import OnSalePage from "./views/OnSalePage.tsx";


const browserRouter = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "/cart", element: <Cart /> },
    {path:"/product/:id", element: <Product />},
    {path:"/ofertas.html", element: <OnSalePage/>},
    {path:"/*", element: <NotFound/>}
  ]);

function App() {
  
  return <RouterProvider router={ browserRouter } />;
}

export default App;
