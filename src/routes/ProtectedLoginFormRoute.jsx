import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedLoginFormRoute = ({ children }) => {
	const { currentUser } = useSelector((store) => store.auth);

	if (currentUser) return <Navigate to='/' />;
	return <>{children}</>;
};
export default ProtectedLoginFormRoute;
