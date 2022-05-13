import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useQuery } from 'react-query';

export default function LoginView() {
	const matchesWidth = useMediaQuery('(min-width:750px)');
	const matchesHeight = useMediaQuery('(min-height:750px)');
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleUsuario = (usuario) => {
		setUsuario(usuario);
	};

	const handlePassword = (usuario) => {
		setPassword(usuario);
	};

	const { isLoading, error, data, refetch } = useQuery(
		'login',
		() =>
			fetch('apiUrl.dummy' + usuario + password)
				.then((res) => {
					handleClick();
					console.log(res);
				})
				.catch((err) =>
					handleClick({
						vertical: 'bottom',
						horizontal: 'center',
					})
				),
		{ enabled: false }
	);

	return (
		<Box
			className="body"
			sx={{
				height: matchesHeight ? '50vh !important' : '90vh !important',
				backgroundColor: 'divider',
			}}>
			<Container
				maxWidth="lg"
				sx={{
					backgroundColor: 'white',
					height: matchesHeight ? '45vh' : '70vh',
					width: matchesWidth ? '40vw' : '90vw',
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
						onChange={(e) => handleUsuario(e.target.value)}
						value={usuario}
					/>
					<TextField
						id="outlined-basic"
						label="Contraseña"
						variant="outlined"
						type="password"
						onChange={(e) => handlePassword(e.target.value)}
					/>
					<Button
						color="primary"
						sx={{
							fontFamily: 'Montserrat',
							textTransform: 'none',
							fontSize: '18px',
						}}
						onClick={() => refetch()}>
						Iniciar sesión
					</Button>
				</Stack>
			</Container>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
					Hubo un fallo al iniciar sesion.
				</Alert>
			</Snackbar>
		</Box>
	);
}
