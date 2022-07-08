import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IsTokenValid } from '../../services/authenticationService';

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const pages = [
		{
			content: 'Documentos Digitales',
			url: '/documentos-digitales',
		},
		{
			content: 'Información sobre COVID-19',
			url: 'https://coronavirus.gob.mx/',
		},
		{ content: 'Trámites', url: 'https://www.gob.mx/tramites/otros' },
		{ content: 'Gobierno', url: 'https://www.gob.mx/gobierno' },
		{
			content: 'Administración',
			url: IsTokenValid() ? '/administracion' : '/login',
		},
		{
			content: (
				<img
					className="img-fluid"
					alt="lupa"
					src="https://framework-gb.cdn.gob.mx/landing/img/lupa.png"
				/>
			),
			url: 'https://www.gob.mx/busqueda?utf8=%E2%9C%93',
			alt: 'Buscar',
		},
	];

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Stack direction="row" spacing={3} sx={{ width: '100%' }}>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'flex', lg: 'none' },
							}}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit">
								<MenuIcon />
							</IconButton>
							<IconButton>
								<img
									width={150}
									height={35}
									alt="logoheader"
									src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
								/>
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { md: 'block', lg: 'none' },
								}}>
								{pages.map((page) => (
									<MenuItem key={page.content}>
										<Link
											key={page.content + 'link'}
											textAlign="center"
											href={page.url}
											underline={'none'}
											rel="noopener">
											{page.alt ? page.alt : page.content}
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Stack
							direction="row"
							spacing={40}
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'none', lg: 'flex' },
							}}>
							<IconButton href="/">
								<img
									width={150}
									height={35}
									alt="logoheader"
									src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
								/>
							</IconButton>
							<Stack
								direction={'row'}
								spacing={2}
								sx={{
									marginLeft: '30% !Important',
									position: 'relative',
									top: '20% !important',
								}}>
								{pages.map((page) => (
									<Link
										key={page.content}
										className="navBarButton"
										href={page.url}
										underline={'none'}
										sx={{ color: 'white', display: 'block' }}>
										{page.content}
									</Link>
								))}
							</Stack>
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
