import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BusquedaTextField from './BusquedaTextField';
import { useQuery } from 'react-query';

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

	const { isLoading, error, data, refetch } = useQuery(
		'cedulaData',
		() =>
			fetch('apiUrl.dummy' + nombre + primerApellido + segundoApellido).then(
				(res) => {
					//handleConsultaCedula(res.json());
					handleConsultaCedula();
				}
			),
		{ enabled: false }
	);

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
					onClick={() => refetch()}>
					Consultar
				</Button>
				<label
					style={{ marginTop: '2rem', fontWeight: 600 }}>
					(*) Campos obligatorios
				</label>
			</Stack>
		</Grid>
	);
};
