import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import BaseLayoutWrapper from './wrappers/BaseLayoutWrapper';

import Home from './core/Home/Home';
import PageNotFound from './core/PageNotFound';

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
			// {
			// 	path: 'about',
			// 	element: <About />,
			// },
			// {
			// 	path: 'cart',
			// 	element: <Cart />,
			// },
			// {
			// 	path: 'checkout',
			// 	element: <Checkout />,
			// },
			// {
			// 	path: 'account',
			// 	element: <Account />,
			// },
			// {
			// 	path: 'products',
			// 	element: <Products />,
			// },
			// {
			// 	path: 'products/:id',
			// 	element: <SingleProduct />,
			// },
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
