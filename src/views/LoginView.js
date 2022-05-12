import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LoginView() {
	const matches600Width = useMediaQuery('(min-width:600px)');
	const matches600Height = useMediaQuery('(min-height:600px)');
	return (
		<Box
			className="body"
			sx={{
				height: matches600Height ? '60vh !important' : '150vh !important',
				backgroundColor: 'divider',
			}}>
			<Container
				maxWidth="lg"
				sx={{
					backgroundColor: 'white',
					height: matches600Height ? '45vh' : '140vh',
					width: matches600Width ? '40vw' : '100vw',
					borderRadius: '5px',
					boxShadow: '2px 2px #888888',
					paddingTop: '3rem',
				}}>
				<Stack spacing={matches600Width ? 5 : 3} direction={'column'}>
					<Typography
						variant="h4"
						component="div"
						sx={{ fontFamily: 'Montserrat', color: 'darkGray' }}>
						Portal de Administración
					</Typography>
					<TextField id="outlined-basic" label="Usuario" variant="outlined" />
					<TextField
						id="outlined-basic"
						label="Contraseña"
						variant="outlined"
						type="password"
					/>
					<Button
						color="primary"
						sx={{
							fontFamily: 'Montserrat',
							textTransform: 'none',
							fontSize: '18px',
						}}>
						Iniciar sesión
					</Button>
				</Stack>
			</Container>
		</Box>
	);
}
