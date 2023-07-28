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
import { ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
				toastStyle={{
					top: '9rem',
					left: '50%',
					translate: '-50%',
					maxWidth: '80vw',
					fontFamily: 'Poppins, sans-serif',
					textAlign: 'center',
					borderRadius: 'var(--border-radius-pill)',
					border: '1px solid var(--color-neutral-300)',
					backgroundColor: 'var(--color-neutral-50)',
				}}
				icon={false}
				closeButton={false}
				position='top-center'
				autoClose={2000}
				transition={Flip}
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
