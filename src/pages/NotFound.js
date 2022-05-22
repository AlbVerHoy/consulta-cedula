import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function NotFound() {
	return (
		<Box
			className="body"
			sx={{
				height: '50vh !important',
				backgroundColor: 'divider',
			}}>
			<Container>
				<Typography
					variant="h4"
					component="div"
					sx={{ fontFamily: 'Montserrat', color: 'darkGray' }}>
					Página no encontrada. Revise la ruta.
				</Typography>
			</Container>
		</Box>
	);
}
