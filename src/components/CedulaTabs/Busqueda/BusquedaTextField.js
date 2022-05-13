import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function BusquedaTextField(props) {
	const { children, placeholder, onChange } = props;
	return (
		<Stack
			component="form"
			sx={{
				width: '25ch',
				marginRight: '2%',
			}}
			spacing={1}
			noValidate
			autoComplete="off">
			<label className="mb-2 mr-sm-2">{children}</label>
			<TextField
				hiddenLabel
				size="small"
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
		</Stack>
	);
}
