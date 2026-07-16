import NotFound from "pages/NotFound";
import Root from "pages/Root";
import Home from "pages/Home";
import Cart from "pages/Cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
