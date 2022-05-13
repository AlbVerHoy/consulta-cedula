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
		lastName: 'Snow',
		firstName: 'Jon',
		age: 35,
	},
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
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
				height: matchesHeight ? '70vh' : '150vh',
				backgroundColor: 'divider',
			}}>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Agregar usuario
					</Typography>
					<Stack direction="row" spacing={1}>
						<TextField
							id="outlined-basic"
							label="Usuario"
							variant="outlined"
							// onChange={(e) => handleUsuario(e.target.value)}
							// value={usuario}
						/>
						<TextField
							id="outlined-basic"
							label="Contraseña"
							variant="outlined"
							// type="password"
							// onChange={(e) => handlePassword(e.target.value)}
						/>
					</Stack>
				</Box>
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
