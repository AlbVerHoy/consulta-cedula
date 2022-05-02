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
import onClickUrl from '../../functions/functions';

const pages = [
	{
		content: 'Registro para vacunación',
		url: 'https://mivacuna.salud.gob.mx/',
	},
	{ content: 'Información sobre COVID-19', url: 'https://coronavirus.gob.mx/' },
	{ content: 'Trámites', url: 'https://www.gob.mx/tramites/otros' },
	{ content: 'Gobierno', url: 'https://www.gob.mx/gobierno' },
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

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (url) => {
		onClickUrl(url);
		setAnchorElNav(null);
	};

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<Stack direction="row" spacing={3}>
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
							<NavBarButton>
								<img
									width={150}
									height={35}
									alt="logoheader"
									src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
								/>
							</NavBarButton>
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
									<MenuItem
										key={page.content}
										onClick={() => handleCloseNavMenu(page.url)}>
										<Typography textAlign="center">
											{page.alt ? page.alt : page.content}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Stack
							direction="row"
							spacing={40}
							sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<NavBarButton>
								<img
									width={150}
									height={35}
									alt="logoheader"
									src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
								/>
							</NavBarButton>
							<Box>
								{pages.map((page) => (
									<NavBarButton
										url={page.url}
										key={page.content}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'white', display: 'block' }}>
										{page.content}
									</NavBarButton>
								))}
							</Box>
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
