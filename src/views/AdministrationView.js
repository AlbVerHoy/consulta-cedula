import React from 'react';
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
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

const rows = [
	{
		id: 1,
		lastName: 'bob',
		firstName: 'bob',
		secondName: 'bob',
		secondLastName: 'bob',
	},
];

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
	const matchesWidth = useMediaQuery('(min-width:750px)');
	const matchesHeight = useMediaQuery('(min-height:550px)');
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'Primer Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'secondName',
      headerName: 'Segundo Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Primer Apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'secondLastName',
      headerName: 'Segundo Apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'folio',
      headerName: 'Folio',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'enrolment',
      headerName: 'Inscripción',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'carrera',
      headerName: 'Carrera',
      width: 150,
      editable: true,
    },
    {
      field: 'university',
      headerName: 'Universidad',
      width: 150,
      editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {
      field: 'edit',
      headerName: '',
      type: 'component',
      width: '100',
      sortable: false,
      renderCell: () => (
        <IconButton onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      )
    },
  ];

	return (
		<Box
			className="body"
			sx={{
				height: matchesHeight ? '70vh' : '200vh',
				backgroundColor: 'divider',
			}}>
			<Modal
				open={open}
				onClose={handleClose}>
				<Container sx={style} maxWidth="md">
					<Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom: '10px'}}>
						Agregar usuario
					</Typography>
					<Stack direction="column" spacing={2}>
						<TextField
							id="outlined-basic"
							label="Primer Nombre"
							variant="outlined"
							// onChange={(e) => handleUsuario(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Segundo Nombre"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Primer Apellido"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Segundo Apellido"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Folio"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Inscripción"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Carrera"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Universidad"
							variant="outlined"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
						<Button
							color="primary"
							sx={{
								fontFamily: 'Montserrat',
								textTransform: 'none',
								fontSize: '18px',
							}}>
							Agregar
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
				<Box
					style={{
						height: 450,
						width: '100%',
						backgroundColor: 'white',
						borderRadius: '5px',
						padding: '5px',
					}}>
					<Stack direction="row" spacing={1}>
						<IconButton onClick={handleOpen}>
							<AddIcon />
						</IconButton>
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</Stack>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
						disableSelectionOnClick
						sx={{ height: 400, overflow: 'scroll' }}
					/>
				</Box>
			</Container>
		</Box>
	);
}
