import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BusquedaTextField from './BusquedaTextField';

const BusquedaTabPanel = () => {
	return (
		<Grid
			container
			sx={{ marginLeft: '30px', flexDirection: { xs: 'column', md: 'row' } }}>
			<BusquedaTextField placeholder="Nombre">Nombre(s)*:</BusquedaTextField>
			<BusquedaTextField placeholder="Primer apellido">
				Primer apellido*:
			</BusquedaTextField>
			<BusquedaTextField placeholder="Segundo apellido">
				Segundo apellido:
			</BusquedaTextField>
			<Stack direction="column" sx={{ marginTop: '2rem' }}>
				<Button
					variant="outlined"
					color="error"
					className="consultarButton"
					sx={{ maxWidth: '150px' }}>
					Consultar
				</Button>
				<label
					style={{ marginTop: '2rem', marginLeft: '5rem', fontWeight: 600 }}>
					(*) Campos obligatorios
				</label>
			</Stack>
		</Grid>
	);
};

export default BusquedaTabPanel;
