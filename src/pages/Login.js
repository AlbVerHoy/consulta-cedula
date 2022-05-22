import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Login } from '../services/authenticationService';

export default function LoginView() {
	const matchesHeight = useMediaQuery('(min-height:750px)');
	const [usuario, setUsuario] = useState('');
	const [usuarioError, setUsuarioError] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [inProgress, setInProgress] = useState(false);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState('');
	const [severity, setSeverity] = useState('error');
	let navigate = useNavigate();

	const handleClick = () => {
		let anyErrors = false;
		if (usuario.length === 0) {
			setUsuarioError(true);
			anyErrors = true;
		}
		if (password.length === 0) {
			setPasswordError(true);
			anyErrors = true;
		}
		if (anyErrors) {
			setError('Usuario y contraseña son requeridos.');
			setSeverity('error');
			setOpen(true);
			return;
		}
		setInProgress(true);
		Login(usuario, password)
			.then((res) => {
				setInProgress(false);
				setSeverity('success');
				setOpen(true);
				navigate('../../administracion', { replace: true });
			})
			.catch((err) => {
				setInProgress(false);
				setSeverity('error');
				setOpen(true);
				setError('Error al iniciar sesión.');
			});
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const handleOnChangeUsuario = (value) => {
		setUsuario(value);
		if (value.length === 0) {
			setUsuarioError(true);
			return;
		}
		setUsuarioError(false);
	};

	const handleOnChangePassword = (value) => {
		setPassword(value);
		if (value.length === 0) {
			setPasswordError(true);
			return;
		}
		setPasswordError(false);
	};

	return (
		<Box
			className="body"
			sx={{
				height: matchesHeight ? '50vh !important' : '90vh !important',
				backgroundColor: 'divider',
			}}>
			<Container
				maxWidth="md"
				sx={{
					backgroundColor: 'white',
					borderRadius: '5px',
					boxShadow: '2px 2px #888888',
					paddingTop: '3rem',
				}}>
				<Stack spacing={3} direction={'column'}>
					<Typography
						variant="h4"
						component="div"
						sx={{ fontFamily: 'Montserrat', color: 'darkGray' }}>
						Portal de Administración
					</Typography>
					<TextField
						id="outlined-basic"
						label="Usuario"
						variant="outlined"
						error={usuarioError}
						onChange={(e) => handleOnChangeUsuario(e.target.value)}
						value={usuario}
					/>
					<TextField
						id="outlined-basic"
						label="Contraseña"
						variant="outlined"
						type="password"
						error={passwordError}
						onChange={(e) => handleOnChangePassword(e.target.value)}
					/>
					<Button
						color="primary"
						sx={{
							fontFamily: 'Montserrat',
							textTransform: 'none',
							fontSize: '18px',
						}}
						onClick={handleClick}>
						Iniciar sesión
					</Button>
				</Stack>
				{inProgress ? <LinearProgress /> : <></>}
			</Container>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{error}
				</Alert>
			</Snackbar>
		</Box>
	);
}
