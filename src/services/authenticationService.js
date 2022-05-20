import axios from 'axios';
import { decodeToken } from 'react-jwt';

const apiUrl = 'https://smerceudla.herokuapp.com';

export const Login = (username, password) =>
	new Promise((resolve, reject) => {
		const requestOptions = {
			headers: { 'Content-Type': 'application/json' },
		};
		axios
			.post(
				`${apiUrl}/authenticate`,
				JSON.stringify({ username, password }),
				requestOptions
			)
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

// export const Auth = async () =>
// 	new Promise((resolve, reject) => {
// 		const requestOptions = {
// 			headers: { 'Content-Type': 'application/json' },
// 		};
// 		axios
// 			.post(
// 				`${apiUrl}/authenticate`,
// 				JSON.stringify({ ${process.env.username}, ${process.env.password} }),
// 				requestOptions
// 			)
// 			.then((res) => {
// 				localStorage.setItem('accessToken', JSON.stringify(res.data));
// 				resolve(res);
// 			})
// 			.catch((err) => reject(Error(err)));
// 	});