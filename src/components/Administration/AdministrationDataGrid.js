import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';

export default function AdministrationDataGrid({
	rows,
	columns,
	setSelectedRow,
  handleOpen,
  handleBorrar,
  refreshData
}) {
	return (
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
				<IconButton onClick={refreshData}>
					<RefreshIcon />
				</IconButton>
			</Stack>
			<DataGrid
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
	);
}
