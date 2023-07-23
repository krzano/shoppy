import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import BaseLayoutWrapper from './wrappers/BaseLayoutWrapper';

import PageNotFound from './core/PageNotFound';
import Home from './core/Home/Home';
import About from './core/About/About';
import Cart from './features/cart/views/Cart';
import Checkout from './features/cart/views/Checkout';
import Products from './features/products/views/Products';
import SingleProduct from './features/products/views/SingleProduct';
import Login from './features/auth/views/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayoutWrapper />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
