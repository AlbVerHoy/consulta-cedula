import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BusquedaTextField from './BusquedaTextField';
import axios from 'axios';

export default function BusquedaTabPanel(props) {
	const { handleConsultaCedula } = props;
	const [nombre, setNombre] = useState('');
	const [primerApellido, setPrimerApellido] = useState('');
	const [segundoApellido, setSegundoApellido] = useState('');

	const handleNombre = (nombre) => {
		setNombre(nombre);
	};

	const handlePrimerApellido = (primerApellido) => {
		setPrimerApellido(primerApellido);
	};

	const handleSegundoApellido = (segundoApellido) => {
		setSegundoApellido(segundoApellido);
	};

	const findPerson = (person) => {
		const requestOptions = {
			headers: { Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUyOTQ2Njk4LCJpYXQiOjE2NTI5Mjg2OTh9.CIUEloQRYmwn-InlVDdid3syN_LN5FM8HkHBWJcqiyvoLKieN_XmViy7BxV2zqlwAvwTORtlMdS8TVhxyA2rgA',
			'Content-Type': 'application/json' },
		};
		const apiUrl = 'https://smerceudla.herokuapp.com';
		axios
			.post(
				`${apiUrl}/person/findPerson`,
				JSON.stringify(person),
				requestOptions
			)
			.then((res) => {
				handleConsultaCedula(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Grid
			container
			sx={{ marginLeft: '30px', flexDirection: { xs: 'column', md: 'row' } }}>
			<BusquedaTextField placeholder="Nombre" onChange={handleNombre}>
				Nombre(s)*:
			</BusquedaTextField>
			<BusquedaTextField
				placeholder="Primer apellido"
				onChange={handlePrimerApellido}>
				Primer apellido*:
			</BusquedaTextField>
			<BusquedaTextField
				placeholder="Segundo apellido"
				onChange={handleSegundoApellido}>
				Segundo apellido:
			</BusquedaTextField>
			<Stack direction="column" sx={{ marginTop: '2rem' }}>
				<Button
					variant="outlined"
					color="error"
					className="consultarButton"
					sx={{ maxWidth: '150px' }}
					onClick={() =>
						findPerson({
							firstName: nombre,
							lastName: primerApellido,
							secondLastName: segundoApellido,
						})
					}>
					Consultar
				</Button>
				<label style={{ marginTop: '2rem', fontWeight: 600 }}>
					(*) Campos obligatorios
				</label>
			</Stack>
		</Grid>
	);
}
