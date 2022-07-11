import React, { useState } from 'react';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FindAllPersons } from '../services/personService';

export default function DigitalDocuments() {
	const [folio, setFolio] = useState('');
	const [url, setUrl] = useState('');
	const [showUrl, setShowUrl] = useState(false);
	const [rows, setRows] = useState([]);
	const matchesWidth = useMediaQuery('(min-width:1170px)');

	const headerStyles = {
		fontSize: '18px',
		fontWeight: 600,
	};

	const rowStyles = {
		fontSize: '18px',
		fontWeight: 400,
	};

	const onSearchHandler = () => {
		setUrl('');
		setShowUrl(false);
		FindAllPersons().then((res) => {
			var result = res.find((person) => person.folio === folio && person.url);
			if (result) {
				setRows([result]);
				setUrl(result.url);
				setShowUrl(true);
			}
		});
	};

	const onResetHandler = () => {
		setUrl('');
		setShowUrl(false);
		setFolio('');
	};

	return (
		<Box
			sx={{
				marginTop: '60px',
				height: matchesWidth ? '700px' : '1000px',
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
								onChange={(e) => setFolio(e.target.value)}
								value={folio}
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
									onClick={onSearchHandler}>
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
									onClick={onResetHandler}>
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
						{showUrl ? (
							<TableContainer component={Paper} sx={{ marginTop: '20px' }}>
								<Table sx={{ minWidth: 650 }} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell sx={headerStyles}>Folio</TableCell>
											<TableCell sx={headerStyles}>Nombre</TableCell>
											<TableCell sx={headerStyles}>Primer apellido</TableCell>
											<TableCell sx={headerStyles}>Segundo apellido</TableCell>
											<TableCell sx={headerStyles}>Institución</TableCell>
											<TableCell sx={headerStyles}>Carrera</TableCell>
											<TableCell sx={headerStyles}>Descargar</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows ? (
											rows.map((row) => (
												<TableRow
													key={row.firstName}
													sx={{
														'&:last-child td, &:last-child th': { border: 0 },
													}}>
													<TableCell component="th" scope="row" sx={rowStyles}>
														{row.folio}
													</TableCell>
													<TableCell sx={rowStyles}>{row.firstName}</TableCell>
													<TableCell sx={rowStyles}>{row.lastName}</TableCell>
													<TableCell sx={rowStyles}>
														{row.secondLastName}
													</TableCell>
													<TableCell sx={rowStyles}>{row.university}</TableCell>
													<TableCell sx={rowStyles}>{row.career}</TableCell>
													<TableCell sx={rowStyles}>
														<Link href={url} target="_blank">
															Descargar
														</Link>
													</TableCell>
												</TableRow>
											))
										) : (
											<></>
										)}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<></>
						)}
					</Container>
				</Box>
			</div>
		</Box>
	);
}
