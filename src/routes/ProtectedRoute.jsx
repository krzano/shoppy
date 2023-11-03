import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const { session } = useSelector((store) => store.auth);

	if (!session) return <Navigate to='/login' />;
	return <>{children}</>;
};
export default ProtectedRoute;
