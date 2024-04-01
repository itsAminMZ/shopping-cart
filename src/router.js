import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from './components/Product'






export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Route>
    </>
))