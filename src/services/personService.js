import axios from 'axios';
import { Auth } from './authenticationService';
import { apiUrl } from '../config/Config';

export const FindPerson = async (person) => {
	const token = await Auth();
	const requestOptions = {
		url: `${apiUrl}/person/findPerson`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: JSON.stringify(person),
	};
	try {
		const res = await axios(requestOptions);
		return res.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

export const FindAllPersons = async (person) => {
	const token = await Auth();
	const requestOptions = {
		url: `${apiUrl}/person`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const res = await axios(requestOptions);
		return res.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

export const CreatePerson = async (person) => {
	const token = await Auth();
	const requestOptions = {
		url: `${apiUrl}/person`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: JSON.stringify(person),
	};
	try {
		const res = await axios(requestOptions);
		return res.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

export const DeletePerson = async (person) => {
	const token = await Auth();
	const requestOptions = {
		url: `${apiUrl}/person`,
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: JSON.stringify(person),
	};
	try {
		const res = await axios(requestOptions);
		return res.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
};