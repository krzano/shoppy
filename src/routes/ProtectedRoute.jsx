import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedLoginFormRoute = ({ children }) => {
	const { session } = useSelector((store) => store.auth);

	if (!session) return <Navigate to='/login' />;
	return <>{children}</>;
};
export default ProtectedLoginFormRoute;
