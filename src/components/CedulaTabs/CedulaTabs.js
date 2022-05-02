import React from 'react';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import BusquedaTabPanel from './Busqueda/BusquedaTabPanel';
import ResultsRable from './Resultados/ResultsTable';

const rows = [
	{
		cedula: 'AFSF618721',
		nombre: 'Alberto',
		primerApellido: 'Verano',
		segundoApellido: 'Hoyos',
		tipo: 'Profesional',
		institucion: 'ITL',
		profesion: 'Sistemas',
	},
];

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const borderStyles = {
	borderBottom: 1,
	borderColor: 'divider',
};

const tabStyles = {
	backgroundColor: '#EAEAEA',
};

const CedulaTabs = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth="lg">
			<h4>
				<strong style={{ fontSize: '24px', fontWeight: '600' }}>
					Consulta de cédulas profesionales
				</strong>
			</h4>
			<Box sx={borderStyles}>
				<Box>
					<Tabs
						sx={borderStyles}
						value={value}
						onChange={handleChange}
						spacing={2}>
						<Tab label="Búsqueda" {...a11yProps(0)} sx={tabStyles} />
						<Tab label="Resultados" {...a11yProps(1)} sx={tabStyles} />
						<Tab label="Detalle" {...a11yProps(2)} sx={tabStyles} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0} title="Datos de consulta">
					<BusquedaTabPanel />
				</TabPanel>
				<TabPanel value={value} index={1} title="Resultados de búsqueda">
					<ResultsRable rows={rows} />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Detalle
				</TabPanel>
			</Box>
		</Container>
	);
};

export default CedulaTabs;
