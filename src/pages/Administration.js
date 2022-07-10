import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import {
	CreatePerson,
	DeletePerson,
	FindAllPersons,
} from '../services/personService';
import AdministrationTabs from '../components/Administration/AdministrationTabs';
import AdministrationDataGrid from '../components/Administration/AdministrationDataGrid';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 10,
	p: 4,
	borderRadius: 1,
};

export default function AdministrationView() {
	const matchesHeight = useMediaQuery('(min-height:550px)');
	const [open, setOpen] = useState(false);
	const [isCedula, setIsCedula] = useState(false);
	const [rows, setRows] = useState([]);
	const [certificateRows, setCertificateRows] = useState([]);
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		secondLastName: '',
		folio: '',
		enrolment: '',
		career: '',
		university: '',
	});
	const [modalTitle, setModalTitle] = useState('Agregar Usuario');
	const [modalButtonText, setModalButtonText] = useState('Agregar');
	const [selectionModel, setSelectionModel] = useState([]);
	const [certificateSelectionModel, setCertificateSelectionModel] = useState(
		[]
	);

	const columns = [
		{
			field: 'firstName',
			headerName: 'Primer Nombre',
			width: 150,
		},
		{
			field: 'lastName',
			headerName: 'Primer Apellido',
			width: 150,
		},
		{
			field: 'secondLastName',
			headerName: 'Segundo Apellido',
			width: 150,
		},
		{
			field: 'folio',
			headerName: 'Folio',
			width: 110,
		},
		{
			field: 'enrolment',
			headerName: 'Inscripción',
			width: 110,
		},
		{
			field: 'career',
			headerName: 'Carrera',
			width: 150,
		},
		{
			field: 'university',
			headerName: 'Universidad',
			width: 150,
		},
	];

	const handleAddClick = (isTabCedula) => {
		setIsCedula(isTabCedula);
		setUser({
			firstName: '',
			lastName: '',
			secondLastName: '',
			folio: '',
			enrolment: '',
			career: '',
			university: '',
			url: '',
		});
		setModalTitle('Agregar Usuario');
		setModalButtonText('Agregar');
		setOpen(true);
	};

	const handleEditClick = (isTabCedula) => {
		if (selectionModel.length === 0) return;
		setIsCedula(isTabCedula);
		setModalTitle('Actualizar Usuario');
		setModalButtonText('Actualizar');
		var rowToEdit = isTabCedula
			? rows.find((row) => row.id === selectionModel[0])
			: certificateRows.find((row) => row.id === selectionModel[0]);
		setUser(rowToEdit);
		setOpen(true);
	};

	const handleCertificateEditClick = (isTabCedula) => {
		if (certificateSelectionModel.length === 0) return;
		setIsCedula(isTabCedula);
		setModalTitle('Actualizar Usuario');
		setModalButtonText('Actualizar');
		var rowToEdit = certificateRows.find((row) => row.id === certificateSelectionModel[0]);
		setUser(rowToEdit);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const RefreshPersons = () => {
		FindAllPersons().then((res) => {
			setRows([]);
			setCertificateRows([]);
			res.forEach((person) => {
				if (!person.url) {
					setRows((oldRows) => [...oldRows, person]);
				} else {
					setCertificateRows((oldCertificateRows) => [
						...oldCertificateRows,
						person,
					]);
				}
				person.id = person.firstName + person.folio;
			});
		});
	};

	const handleCedulaAdd = async () => {
		CreatePerson(user).then(() => {
			RefreshPersons();
			setOpen(false);
		});
	};

	const handleCertificateAdd = async () => {
		CreatePerson(user).then(() => {
			RefreshPersons();
			setOpen(false);
		});
	};

	const handleCedulaDelete = async () => {
		if (selectionModel.length === 0) return;
		var rowToDelete = rows.find((row) => row.id === selectionModel[0]);
		DeletePerson(rowToDelete).then(() => {
			RefreshPersons();
		});
	};

	const handleCertificateDelete = async () => {
		if (certificateSelectionModel.length === 0) return;
		var rowToDelete = certificateRows.find(
			(row) => row.id === certificateSelectionModel[0]
		);
		DeletePerson(rowToDelete).then(() => {
			RefreshPersons();
		});
	};

	useEffect(() => {
		RefreshPersons();
	}, []);

	return (
		<Box
			className="body"
			sx={{
				height: matchesHeight ? '80vh' : '200vh',
				backgroundColor: 'divider',
			}}>
			<Modal open={open} onClose={handleClose}>
				<Container
					sx={style}
					maxWidth="md"
					maxHeight="md"
					style={{ maxHeight: '100%', overflow: 'auto' }}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						sx={{ marginBottom: '10px' }}>
						{modalTitle}
					</Typography>
					<Stack direction="column" spacing={2}>
						<TextField
							id="outlined-basic"
							label="Nombre(s)"
							variant="outlined"
							defaultValue={user.firstName}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									firstName: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Primer Apellido"
							variant="outlined"
							value={user.lastName}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									lastName: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Segundo Apellido"
							variant="outlined"
							value={user.secondLastName}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									secondLastName: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Folio"
							variant="outlined"
							value={user.folio}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									folio: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Inscripción"
							variant="outlined"
							value={user.enrolment}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									enrolment: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Carrera"
							variant="outlined"
							value={user.career}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									career: e.target.value,
								}))
							}
						/>
						<TextField
							id="outlined-basic"
							label="Universidad"
							variant="outlined"
							value={user.university}
							onChange={(e) =>
								setUser((prevState) => ({
									...prevState,
									university: e.target.value,
								}))
							}
						/>
						{!isCedula ? (
							<>
								<TextField
									id="outlined-basic"
									label="Url"
									variant="outlined"
									value={user.url}
									onChange={(e) =>
										setUser((prevState) => ({
											...prevState,
											url: e.target.value,
										}))
									}
								/>
								<Button
									color="primary"
									sx={{
										fontFamily: 'Montserrat',
										textTransform: 'none',
										fontSize: '18px',
									}}
									onClick={handleCertificateAdd}>
									{modalButtonText}
								</Button>
							</>
						) : (
							<Button
								color="primary"
								sx={{
									fontFamily: 'Montserrat',
									textTransform: 'none',
									fontSize: '18px',
								}}
								onClick={handleCedulaAdd}>
								{modalButtonText}
							</Button>
						)}
						<Button
							color="error"
							sx={{
								fontFamily: 'Montserrat',
								textTransform: 'none',
								fontSize: '18px',
							}}
							onClick={handleClose}>
							Cancelar
						</Button>
					</Stack>
				</Container>
			</Modal>
			<Container maxWidth="lg">
				<AdministrationTabs>
					<AdministrationDataGrid
						rows={rows}
						columns={columns}
						handleAddClick={handleAddClick}
						handleEditClick={handleEditClick}
						handleBorrar={handleCedulaDelete}
						refreshData={RefreshPersons}
						setSelectionModel={setSelectionModel}
						selectionModel={selectionModel}
						isTabCedula
					/>
					<AdministrationDataGrid
						rows={certificateRows}
						columns={[
							...columns,
							{
								field: 'url',
								headerName: 'Url',
								width: 150,
							},
						]}
						handleAddClick={handleAddClick}
						handleEditClick={handleCertificateEditClick}
						handleBorrar={handleCertificateDelete}
						refreshData={RefreshPersons}
						isTabCedula={false}
						setSelectionModel={setCertificateSelectionModel}
						selectionModel={certificateSelectionModel}
					/>
				</AdministrationTabs>
			</Container>
		</Box>
	);
}
