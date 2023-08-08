import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import BaseLayoutWrapper from './wrappers/BaseLayoutWrapper';
import PageNotFound from './core/PageNotFound';
import Home from './core/Home/Home';
import About from './core/About/About';
import Cart from './features/cart/views/Cart';
import Checkout from './features/cart/views/Checkout';
import Products from './features/products/views/Products';
import SingleProduct, {
	loader as singleProductLoader,
} from './features/products/views/SingleProduct';
import Login from './features/auth/views/Login';
import ProtectedLoginFormRoute from './routes/ProtectedLoginFormRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';
import ScrollToTopOnMount from './components/ScrollToTopOnMount/ScrollToTopOnMount';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayoutWrapper />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: (
					<>
						{/* TO ASK */}
						{/* TODO: Fix scrolling when user clicks browsers back button */}
						{/* <ScrollToTopOnMount /> */}
						<Home />
					</>
				),
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
				element: (
					<ProtectedRoute>
						<Checkout />
					</ProtectedRoute>
				),
			},
			{
				path: 'login',
				element: (
					<ProtectedLoginFormRoute>
						<Login />
					</ProtectedLoginFormRoute>
				),
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				loader: singleProductLoader,
			},
		],
	},
]);

function App() {
	return (
		<>
			<GlobalStyles />
			<ToastContainer
				icon={false}
				closeButton={false}
				position='top-center'
				autoClose={1600}
				transition={Flip}
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
