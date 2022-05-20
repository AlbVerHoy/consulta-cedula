import { Navigate } from 'react-router-dom';
import { IsTokenValid } from '../services/authenticationService';

const Protected = ({ fallbackTo, children }) => {
	if (!IsTokenValid()) {
		return fallbackTo ? fallbackTo : <Navigate to="/" replace />;
	}
	if (fallbackTo) window.history.replaceState({}, document.title, '/');
	return children;
};

export default Protected;
