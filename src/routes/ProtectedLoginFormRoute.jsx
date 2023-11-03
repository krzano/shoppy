import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedLoginFormRoute = ({ children }) => {
	const { session } = useSelector((store) => store.auth);
	const location = useLocation();
	const from = location?.state?.from;

	if (session) return <Navigate to={from ? from : '/'} />;
	return <>{children}</>;
};
export default ProtectedLoginFormRoute;
