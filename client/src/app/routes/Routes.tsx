import { createBrowserRouter } from 'react-router-dom'
import App from '../layout/App'
import Catalog from '../../components/catalog/Catalog'
import About from '../layout/about/About'
import HomePage from '../layout/home/HomePage'
import ProductDetails from '../../components/catalog/ProductDetails'
import Contact from '../layout/contact/Contact'


export const router = createBrowserRouter([
 {
    path: '/',
    element: <App/>,
    children : [
        {path:'', element: <HomePage/>},
        {path:'catalog', element: <Catalog/>},
        {path:'catalog/:id', element: <ProductDetails/>},
        {path:'about', element: <About/>},
        {path:'contact', element: <Contact/>},
    ]
 }
])
