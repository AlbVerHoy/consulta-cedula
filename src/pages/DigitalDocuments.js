import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function DigitalDocuments() {
	const matchesWidth = useMediaQuery('(min-width:1170px)');
	return (
		<Box
			sx={{
				marginTop: '60px',
				height: matchesWidth ? '600px' : '800px',
				backgroundColor: 'divider',
			}}>
			<div
				style={{
					backgroundImage: `url(https://www.siged.sep.gob.mx/SIGED/ima/DocumentosCerti.png)`,
					height: '280px',
				}}>
				<Box sx={{}}>
					<Typography
						variant="h4"
						sx={{
							color: '#fff',
							textShadow: '2px 2px  black',
							fontSize: '24px',
							marginLeft: '117px',
							paddingTop: '50px',
							display: 'block',
							fontWeight: '400',
							lineHeight: '1.235',
							letterSpacing: '0.00735em',
							textAlign: 'justify',
							marginRight: '40px',
						}}>
						Sistema de Información y Gestión Educativa
					</Typography>
					<Typography
						variant="h4"
						sx={{
							color: '#fff',
							textShadow: '2px 2px  black',
							fontSize: '28px',
							marginLeft: '117px',
							display: 'block',
							marginTop: '1px',
							fontWeight: '400',
							lineHeight: '1.235',
							letterSpacing: '0.00735em',
							marginRight: '40px',
						}}>
						Validación de documentos académicos electrónicos
					</Typography>
					<Container
						sx={{
							width: matchesWidth ? '1170px' : '95vw',
							backgroundColor: '#545454',
							margin: '110px auto 50px auto',
							padding: '15px',
						}}>
						<Stack
							direction={matchesWidth ? 'row' : 'column'}
							spacing={matchesWidth ? 8 : 1}>
							<TextField
								id="outlined-basic"
								placeholder="*Folio SEP"
								variant="outlined"
								sx={{
									backgroundColor: 'rgb(225,225,225)',
									width: '100%',
								}}
								// error={usuarioError}
								// onChange={(e) => handleOnChangeUsuario(e.target.value)}
								// value={usuario}
							/>
							<Stack
								direction={matchesWidth ? 'row' : 'column'}
								spacing={matchesWidth ? 4 : 0}
								sx={{ width: matchesWidth ? '41.66%' : '100%' }}>
								<Button
									variant="contained"
									sx={{
										width: matchesWidth ? '350px' : '100%',
										backgroundColor: '#5bc0de',
										textTransform: 'none',
										fontSize: '18px',
										fontFamily: 'Montserrat !important',
									}}
									// onClick={() =>
									// 	onConsultarHandle({
									// 		firstName: nombre,
									// 		lastName: primerApellido,
									// 		secondLastName: segundoApellido,
									// 	})
									// }
								>
									Buscar
								</Button>
								<Button
									variant="contained"
									sx={{
										width: matchesWidth ? '350px' : '100%',
										backgroundColor: '#f0ad4e',
										textTransform: 'none',
										fontSize: '18px',
										fontFamily: 'Montserrat !important',
									}}
									// onClick={() =>
									// 	onConsultarHandle({
									// 		firstName: nombre,
									// 		lastName: primerApellido,
									// 		secondLastName: segundoApellido,
									// 	})
									// }
								>
									Restablecer
								</Button>
							</Stack>
						</Stack>
						<Link
							target="_blank"
							rel="noopener"
							href="http://www.participa.gob.mx/"
							sx={{
								fontFamily: 'Montserrat !important',
								fontWeight: 300,
								lineWeight: '1.428571429',
							}}
							color="#fff">
							Ubica el folio en tu certificado
						</Link>
					</Container>
					<Container
						sx={{
							width: '100%',
							margin: '0px auto',
						}}>
						<Breadcrumbs
							aria-label="breadcrumb"
							separator="›"
							sx={{ marginBottom: '50px' }}>
							<Link
								underline="hover"
								sx={{ display: 'flex', alignItems: 'center' }}
								color="inherit"
								href="/">
								<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
							</Link>
							<Link
								underline="hover"
								sx={{ display: 'flex', alignItems: 'center' }}
								color="inherit"
								href="/">
								Inicio
							</Link>
							<Link
								underline="hover"
								sx={{ display: 'flex', alignItems: 'center' }}
								color="inherit"
								href="/">
								Consultas
							</Link>
							<Link
								underline="hover"
								sx={{ display: 'flex', alignItems: 'center' }}
								color="inherit"
								href="#">
								Documentos académicos electrónicos
							</Link>
						</Breadcrumbs>
						<Container
							sx={{
								backgroundColor: '#d9edf7',
								color: '#31708f',
								borderColor: '#bce8f1',
								border: '1px solid',
								borderRadius: '4px',
								height: '60px',
								fontSize: '18px',
								fontFamily: 'Montserrat !important',
							}}>
							<LightbulbIcon color="#1c588f" />
							Los certificados estarán disponibles para su consulta un día
							después de su emisión.
						</Container>
					</Container>
				</Box>
			</div>
		</Box>
	);
}
