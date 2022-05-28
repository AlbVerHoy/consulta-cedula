import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BusquedaTextField from './BusquedaTextField';
import { FindPerson } from '../../../services/personService';
import LinearProgress from '@mui/material/LinearProgress';

export default function BusquedaTabPanel(props) {
	const { handleConsultaCedula } = props;
	const [nombre, setNombre] = useState('');
	const [segundoNombre, setSegundoNombre] = useState('');
	const [nombreError, setNombreError] = useState(false);
	const [nombreErrText, setNombreErrText] = useState('');
	const [primerApellido, setPrimerApellido] = useState('');
	const [primerApellidoError, setPrimerApellidoError] = useState(false);
	const [primerApellidoErrText, setPrimerApellidoErrText] = useState('');
	const [segundoApellido, setSegundoApellido] = useState('');
	const [segundoApellidoError, setSegundoApellidoError] = useState(false);
	const [segundoApellidoErrText, setSegundoApellidoErrText] = useState('');
	const [inProgress, setInProgress] = useState(false);

	const handleNombre = (nombre) => {
		if (nombre.length === 0) {
			setNombreError(true);
			setNombreErrText('Campo obligatorio.');
			return;
		}
		setNombreErrText('');
		setNombreError(false);
		var nombres = nombre.split(' ');
		setNombre(nombre[0]);
		if (nombres.length > 1) setSegundoNombre(nombres[1]);
	};

	const handlePrimerApellido = (primerApellido) => {
		if (primerApellido.length === 0) {
			setPrimerApellidoError(true);
			setPrimerApellidoErrText('Campo obligatorio.');
			return;
		}
		setPrimerApellidoErrText('');
		setPrimerApellidoError(false);
		setPrimerApellido(primerApellido);
	};

	const handleSegundoApellido = (segundoApellido) => {
		if (segundoApellido.length === 0) {
			setSegundoApellidoError(true);
			setSegundoApellidoErrText('Campo obligatorio.');
			return;
		}
		setSegundoApellidoError(false);
		setSegundoApellidoErrText('');
		setSegundoApellido(segundoApellido);
	};

	const onConsultarHandle = async (person) => {
		let anyErrors = false;
		if (primerApellido.length === 0) {
			setPrimerApellidoError(true);
			setPrimerApellidoErrText('Campo obligatorio.');
			anyErrors = true;
		}
		if (segundoApellido.length === 0) {
			setSegundoApellidoError(true);
			setSegundoApellidoErrText('Campo obligatorio.');
			anyErrors = true;
		}
		if (nombre.length === 0) {
			setNombreError(true);
			setNombreErrText('Campo obligatorio.');
			anyErrors = true;
		}
		if (anyErrors) return;
		setInProgress(true);
		FindPerson(person)
			.then((res) => {
				setInProgress(false);
				if (res) handleConsultaCedula(res);
			})
			.catch((err) => {
				console.log(err);
				setInProgress(false);
			});
	};

	return (
		<>
			<Grid
				container
				sx={{ marginLeft: '30px', flexDirection: { xs: 'column', md: 'row' } }}>
				<BusquedaTextField
					placeholder="Nombre"
					error={nombreError}
					helperText={nombreErrText}
					onChange={handleNombre}>
					Nombre(s)*:
				</BusquedaTextField>
				<BusquedaTextField
					placeholder="Primer apellido"
					error={primerApellidoError}
					helperText={primerApellidoErrText}
					onChange={handlePrimerApellido}>
					Primer apellido*:
				</BusquedaTextField>
				<BusquedaTextField
					placeholder="Segundo apellido"
					error={segundoApellidoError}
					helperText={segundoApellidoErrText}
					onChange={handleSegundoApellido}>
					Segundo apellido*:
				</BusquedaTextField>
				<Stack direction="column" sx={{ marginTop: '2rem' }}>
					<Button
						variant="outlined"
						color="error"
						className="consultarButton"
						sx={{ maxWidth: '150px' }}
						onClick={() =>
							onConsultarHandle({
								firstName: nombre,
								secondName: segundoNombre,
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
			{inProgress ? <LinearProgress /> : <></>}
		</>
	);
}
