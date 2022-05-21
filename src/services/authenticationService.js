import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { apiUrl, username, password } from '../config/Config';

export const Login = (username, password) =>
	new Promise((resolve, reject) => {
		const requestOptions = {
			url: `${apiUrl}/authenticate`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify({ username, password }),
		};
		axios(requestOptions)
			.then((res) => {
				localStorage.setItem('accessToken', JSON.stringify(res.data));
				resolve(res);
			})
			.catch((err) => reject(Error(err)));
	});

export function Logout() {
	localStorage.removeItem('accessToken');
}

export const IsTokenValid = () => {
	if (!localStorage.getItem('accessToken')) return false;
	const decodedToken = decodeToken(localStorage.getItem('accessToken'));

	var utcSeconds = decodedToken.exp;
	var expDate = new Date(0);
	expDate.setUTCSeconds(utcSeconds);
	const dateNow = Date.now();

	return expDate >= dateNow;
};

export async function Auth() {
	if (IsTokenValid())
		return JSON.parse(localStorage.getItem('accessToken')).token;
	const requestOptions = {
		method: 'POST',
		url: `${apiUrl}/authenticate`,
		headers: { 'Content-Type': 'application/json' },
		data: JSON.stringify({ username, password }),
	};
	try {
		const res = await axios(requestOptions);
		return res.data.token;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
