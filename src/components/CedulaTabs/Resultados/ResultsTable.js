import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const headerStyles = {
	fontSize: '18px',
	fontWeight: 600,
};

const rowStyles = {
	fontSize: '18px',
	fontWeight: 400,
};

export default function ResultsRable(props) {
	const { rows } = props;
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell sx={headerStyles}>Folio</TableCell>
						<TableCell sx={headerStyles}>Nombre</TableCell>
						<TableCell sx={headerStyles}>Primer apellido</TableCell>
						<TableCell sx={headerStyles}>Segundo apellido</TableCell>
						<TableCell sx={headerStyles}>Institución</TableCell>
						<TableCell sx={headerStyles}>Profesión</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows ?
						rows.map((row) => (
							<TableRow
								key={row.firstName}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row" sx={rowStyles}>
									{row.folio}
								</TableCell>
								<TableCell sx={rowStyles}>{row.firstName}</TableCell>
								<TableCell sx={rowStyles}>{row.lastName}</TableCell>
								<TableCell sx={rowStyles}>{row.secondLastName}</TableCell>
								<TableCell sx={rowStyles}>{row.university}</TableCell>
								<TableCell sx={rowStyles}>{row.career}</TableCell>
							</TableRow>
						)): <></>}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
