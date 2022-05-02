import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import NavBarButton from './NavBarButton';

const NavBar = () => {
	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<div>
						<NavBarButton>
							<FontAwesomeIcon icon={faUniversalAccess} size="2x" />
						</NavBarButton>
						<NavBarButton>
							<img
								width={150}
								height={35}
								alt="logoheader"
								src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
							/>
						</NavBarButton>
					</div>
					<div>
						<NavBarButton url="https://mivacuna.salud.gob.mx/">
							Registro para vacunación
						</NavBarButton>
						<NavBarButton url="https://coronavirus.gob.mx/">
							Información sobre COVID-19
						</NavBarButton>
						<NavBarButton>Trámites</NavBarButton>
						<NavBarButton>Gobierno</NavBarButton>
						<NavBarButton url="https://www.gob.mx/busqueda?utf8=%E2%9C%93">
							<img
								className="img-fluid"
								alt="lupa"
								src="https://framework-gb.cdn.gob.mx/landing/img/lupa.png"
							/>
						</NavBarButton>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
