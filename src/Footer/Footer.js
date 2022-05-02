import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const linkStyles = {
	fontFamily: 'Montserrat !important',
	fontSize: '85% !important',
	fontWeight: '400',
	color: '#fff',
	textAlign: 'left',
};

const paragraphStyles = {
	fontFamily: 'Montserrat !important',
	fontSize: '85%',
	fontWeight: '400',
	color: '#fff',
	textAlign: 'left',
};

const paragraphHeadStyles = {
	fontFamily: 'Montserrat !important',
	fontSize: '1rem !important',
	fontWeight: '400',
	color: '#fff',
	textAlign: 'left',
};

const Footer = () => {
	return (
		<Container
			maxWidth="100%"
			sx={{
				backgroundColor: '#13332b',
				color: '#fff',
				position: 'absolute',
				paddingLeft: '0 !important',
				paddingRight: '0 !important',
			}}>
			<Stack direction="column">
				<Stack minHeight={60}></Stack>
				<Stack direction="row">
					<Stack flex=".8"></Stack>
					<Stack flex="1.7" sx={{marginTop: '-1%'}}>
						<img
							style={{
								maxWidth: '90%',
								marginTop: '15%',
								marginLeft: '-4%',
								fontSize: '85%',
								lineHeight: '135%',
								fontWeight: '400',
							}}
							alt="logoheader"
							src="https://framework-gb.cdn.gob.mx/landing/img/logofooter.png"
						/>
					</Stack>
					<Stack flex="2" sx={{ paddingTop: '2%' }}>
						<Box className="paragraph" style={paragraphHeadStyles}>Enlaces</Box>
						<Stack>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Participa
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Publicaciones Oficiales
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Marco Jurídico
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Plataforma Nacional de Transparencia
							</Link>
						</Stack>
					</Stack>
					<Stack flex="1.8" sx={{ padding: '1%' }}>
						<Box className="paragraph"style={paragraphHeadStyles}>¿Qué es gob.mx?</Box>
						<Box className="paragraph" style={paragraphStyles}>
							Es el portal único de trámites, información y participación
							ciudadana.{' '}
							<Link href="#" underline="always" color="#fff" sx={linkStyles}>
								Leer más
							</Link>
						</Box>
						<Stack>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Portal de datos abiertos
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Declaración de accesibilidad
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Aviso de privacidad integral
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Aviso de privacidad simplificado
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Términos y condiciones
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Política de seguridad
							</Link>
							<Link href="#" underline="hover" color="#fff" sx={linkStyles}>
								Mapa del sitio
							</Link>
						</Stack>
					</Stack>
					<Stack flex="1.7" sx={{ padding: '1%' }}>
						<Link
							href="#"
							underline="always"
							color="#fff"
							sx={paragraphHeadStyles}>
							Denuncia contra servidores públicos
						</Link>
						<Stack minHeight={20}></Stack>
						<Box className="paragraph" style={paragraphStyles}>Síguenos en:</Box>
						<Stack direction="row" spacing={2}>
							<Link href="https://www.facebook.com/gobmexico/" underline="none" color="white">
								<FacebookIcon />
							</Link>
              <Link href="https://twitter.com/GobiernoMX" underline="none" color="white">
								<TwitterIcon />
							</Link>
						</Stack>
					</Stack>
					<Stack flex=".8"></Stack>
				</Stack>
				<Stack minHeight={20}></Stack>
			</Stack>
			<div
				style={{
					backgroundImage:
						'url(https://framework-gb.cdn.gob.mx/landing/img/pleca.svg)',
					backgroundColor: '#12322b',
					backgroundRepeat: 'repeat-x',
					width: '100%',
					paddingRight: '15px',
					paddingLeft: '15px',
					boxSizing: 'border-box',
				}}>
				<br />
				<br />
				<br />
			</div>
		</Container>
	);
};

export default Footer;
