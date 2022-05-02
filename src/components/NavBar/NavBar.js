import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarButton from './NavBarButton';
import MenuItem from '@mui/material/MenuItem';

const pages = [
	{ name: 'Registro para vacunación', url: 'https://mivacuna.salud.gob.mx/' },
	{ name: 'Información sobre COVID-19', url: 'https://coronavirus.gob.mx/' },
	{ name: 'Trámites', url: 'https://www.gob.mx/tramites/otros' },
	{ name: 'Gobierno', url: 'https://www.gob.mx/gobierno' },
	{
		name: (
			<img
				className="img-fluid"
				alt="lupa"
				src="https://framework-gb.cdn.gob.mx/landing/img/lupa.png"
			/>
		),
		url: 'https://www.gob.mx/busqueda?utf8=%E2%9C%93',
	},
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Stack direction="row" spacing={60}>
						<NavBarButton>
							<img
								width={150}
								height={35}
								alt="logoheader"
								src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
							/>
						</NavBarButton>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit">
								<MenuIcon />
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
									display: { xs: 'block', md: 'none' },
								}}>
								{pages.map((page) => (
									<MenuItem key={page.name} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<NavBarButton
									url={page.url}
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}>
									{page.name}
								</NavBarButton>
							))}
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
