import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import {
	CreatePerson,
	DeletePerson,
	FindAllPersons,
} from '../services/personService';
import AdministrationTabs from '../components/Administration/AdministrationTabs';

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
	const [isLoading, setIsLoading] = useState(true);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [secondLastName, setSecondLastName] = useState('');
	const [folio, setFolio] = useState('');
	const [enrolment, setEnrolment] = useState('');
	const [career, setCareer] = useState('');
	const [university, setUniversity] = useState('');
	const [isCedula, setIsCedula] = useState(false);
	const [rows, setRows] = useState([]);
	const [selectedRow, setSelectedRow] = useState({});
	const [modalTitle, setModalTitle] = useState('Agregar Usuario');
	const [modalButtonText, setModalButtonText] = useState('Agregar');

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

	const handleOpen = (type, isTabCedula) => {
		setIsCedula(isTabCedula);
		if (type === 'create') {
			setModalTitle('Agregar Usuario');
			setModalButtonText('Agregar');
		} else if (type === 'update') {
			if (Object.entries(selectedRow).length === 0) return;
			setModalTitle('Actualizar Usuario');
			setModalButtonText('Actualizar');
		}
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const RefreshPersons = () => {
		FindAllPersons().then((res) => {
			if (!res) return;
			res.map((person) => (person.id = person.folio));
			setRows(res);
		});
	};

	const handleAgregar = async () => {
		setIsLoading(true);
		setOpen(false);
		const person =
			modalButtonText === 'Actualizar'
				? selectedRow
				: {
						firstName,
						lastName,
						secondLastName,
						folio,
						enrolment,
						career,
						university,
				  };
		CreatePerson(person).then(() => {
			RefreshPersons();
		});
		setFirstName('');
		setLastName('');
		setSecondLastName('');
		setFolio('');
		setCareer('');
		setEnrolment('');
		setUniversity('');
		//setSelectedRow({});
		setIsLoading(false);
	};

	const handleBorrar = async () => {
		if (Object.entries(selectedRow).length === 0) return;
		setIsLoading(true);
		DeletePerson(selectedRow).then(() => {
			RefreshPersons();
		});
		setIsLoading(false);
	};

	useEffect(() => {
		RefreshPersons();
		setIsLoading(false);
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
							defaultValue={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.firstName
									: firstName
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											firstName: e.target.value,
									  }))
									: setFirstName(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Primer Apellido"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.lastName
									: lastName
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											lastName: e.target.value,
									  }))
									: setLastName(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Segundo Apellido"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.secondLastName
									: secondLastName
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											secondLastName: e.target.value,
									  }))
									: setSecondLastName(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Folio"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.folio
									: folio
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											folio: e.target.value,
									  }))
									: setFolio(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Inscripción"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.enrolment
									: enrolment
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											enrolment: e.target.value,
									  }))
									: setEnrolment(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Carrera"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.career
									: career
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											career: e.target.value,
									  }))
									: setCareer(e.target.value)
							}
						/>
						<TextField
							id="outlined-basic"
							label="Universidad"
							variant="outlined"
							value={
								modalButtonText === 'Actualizar' && selectedRow
									? selectedRow.university
									: university
							}
							onChange={(e) =>
								modalButtonText === 'Actualizar'
									? setSelectedRow((prevState) => ({
											...prevState,
											university: e.target.value,
									  }))
									: setUniversity(e.target.value)
							}
						/>
						{!isCedula ? (
							<TextField
								id="outlined-basic"
								label="Url"
								variant="outlined"
								value={
									modalButtonText === 'Actualizar' && selectedRow
										? selectedRow.university
										: university
								}
								onChange={(e) =>
									modalButtonText === 'Actualizar'
										? setSelectedRow((prevState) => ({
												...prevState,
												university: e.target.value,
										  }))
										: setUniversity(e.target.value)
								}
							/>
						) : (
							<></>
						)}
						<Button
							color="primary"
							sx={{
								fontFamily: 'Montserrat',
								textTransform: 'none',
								fontSize: '18px',
							}}
							onClick={handleAgregar}>
							{modalButtonText}
						</Button>
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
					<Box
						style={{
							height: 450,
							width: '100%',
							backgroundColor: 'white',
							borderRadius: '5px',
							padding: '5px',
						}}>
						<Stack direction="row" spacing={1}>
							<IconButton onClick={() => handleOpen('create', true)}>
								<AddIcon />
							</IconButton>
							<IconButton onClick={handleBorrar}>
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={() => handleOpen('update', true)}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={RefreshPersons}>
								<RefreshIcon />
							</IconButton>
						</Stack>
						<DataGrid
							loading={isLoading}
							rows={rows}
							columns={columns}
							pageSize={10}
							rowsPerPageOptions={[10]}
							onSelectionModelChange={(id) => {
								const selectedId = new Set(id);
								const selectedRowData = rows.filter((row) =>
									selectedId.has(row.id.toString())
								);
								setSelectedRow(selectedRowData[0]);
							}}
							sx={{ height: 400, overflow: 'scroll' }}
						/>
					</Box>
					<Box
						style={{
							height: 450,
							width: '100%',
							backgroundColor: 'white',
							borderRadius: '5px',
							padding: '5px',
						}}>
						<Stack direction="row" spacing={1}>
							<IconButton onClick={() => handleOpen('create', false)}>
								<AddIcon />
							</IconButton>
							<IconButton onClick={handleBorrar}>
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={() => handleOpen('update', false)}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={RefreshPersons}>
								<RefreshIcon />
							</IconButton>
						</Stack>
						<DataGrid
							loading={isLoading}
							rows={[]}
							columns={[
								...columns,
								{
									field: 'url',
									headerName: 'Url',
									width: 150,
								},
							]}
							pageSize={10}
							rowsPerPageOptions={[10]}
							onSelectionModelChange={(id) => {
								const selectedId = new Set(id);
								const selectedRowData = rows.filter((row) =>
									selectedId.has(row.id.toString())
								);
								setSelectedRow(selectedRowData[0]);
							}}
							sx={{ height: 400, overflow: 'scroll' }}
						/>
					</Box>
				</AdministrationTabs>
			</Container>
		</Box>
	);
}
