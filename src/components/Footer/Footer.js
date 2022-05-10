import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
			<Grid
				container
				sx={{ marginLeft: '30px', flexDirection: { xs: 'column', md: 'row' } }}>
				<Stack flex=".8"></Stack>
				<Stack flex="1.7" maxWidth={450} sx={{ marginTop: '-1%' }}>
					<img
						style={{
							maxWidth: '90%',
							marginTop: '15%',
							marginLeft: '-4%',
							fontSize: '85%',
							lineHeight: '135%',
							fontWeight: '400',
							padding: '1%',
						}}
						alt="logoheader"
						src="https://framework-gb.cdn.gob.mx/landing/img/logofooter.png"
					/>
				</Stack>
				<Stack flex="2" sx={{ padding: '1%' }}>
					<Box className="paragraph" style={paragraphHeadStyles}>
						Enlaces
					</Box>
					<Stack>
						<Link
							target="_blank"
							rel="noopener"
							href="http://www.participa.gob.mx/"
							color="#fff"
							sx={linkStyles}>
							Participa
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/publicaciones"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Publicaciones Oficiales
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="http://www.ordenjuridico.gob.mx/"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Marco Jurídico
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://consultapublicamx.inai.org.mx/vut-web/"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Plataforma Nacional de Transparencia
						</Link>
					</Stack>
				</Stack>
				<Stack flex="1.8" sx={{ padding: '1%' }}>
					<Box className="paragraph" style={paragraphHeadStyles}>
						¿Qué es gob.mx?
					</Box>
					<Box className="paragraph" style={paragraphStyles}>
						Es el portal único de trámites, información y participación
						ciudadana.{' '}
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/que-es-gobmx'"
							underline="always"
							color="#fff"
							sx={linkStyles}>
							Leer más
						</Link>
					</Box>
					<Stack>
						<Link
							target="_blank"
							rel="noopener"
							href="https://datos.gob.mx/"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Portal de datos abiertos
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/accesibilidad"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Declaración de accesibilidad
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/privacidadintegral"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Aviso de privacidad integral
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/privacidadsimplificado"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Aviso de privacidad simplificado
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/terminos"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Términos y condiciones
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Política de seguridad
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.gob.mx/sitemap"
							underline="hover"
							color="#fff"
							sx={linkStyles}>
							Mapa del sitio
						</Link>
					</Stack>
				</Stack>
				<Stack flex="1.7" sx={{ padding: '1%' }}>
					<Link
						target="_blank"
						rel="noopener"
						href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54"
						underline="always"
						color="#fff"
						sx={paragraphHeadStyles}>
						Denuncia contra servidores públicos
					</Link>
					<Stack minHeight={20}></Stack>
					<Box className="paragraph" style={paragraphStyles}>
						Síguenos en:
					</Box>
					<Stack direction="row" spacing={2}>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.facebook.com/gobmexico/"
							underline="none"
							color="white">
							<FacebookIcon />
						</Link>
						<Link
							target="_blank"
							rel="noopener"
							href="https://twitter.com/GobiernoMX"
							underline="none"
							color="white">
							<TwitterIcon />
						</Link>
					</Stack>
				</Stack>
				<Stack flex=".8"></Stack>
			</Grid>
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
