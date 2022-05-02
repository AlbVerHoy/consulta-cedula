import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BusquedaTextField from './BusquedaTextField';

const BusquedaTabPanel = () => {
	return (
		<Stack direction="row" spacing={2} style={{ marginLeft: '30px' }}>
			<BusquedaTextField placeholder="Nombre">Nombre(s)*:</BusquedaTextField>
			<BusquedaTextField placeholder="Primer apellido">
				Primer apellido*:
			</BusquedaTextField>
			<BusquedaTextField placeholder="Segundo apellido">
				Segundo apellido:
			</BusquedaTextField>
			<div style={{ marginTop: '2rem' }}>
				<Button variant="outlined" color="error" className="consultarButton">
					Consultar
				</Button>
				<label
					style={{ marginTop: '2rem', marginLeft: '5rem', fontWeight: 600 }}>
					(*) Campos obligatorios
				</label>
			</div>
		</Stack>
	);
};

export default BusquedaTabPanel;
