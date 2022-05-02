import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const BusquedaTextField = (props) => {
	return (
		<Stack
			component="form"
			sx={{
				width: '25ch',
			}}
			spacing={1}
			noValidate
			autoComplete="off">
			<label className="mb-2 mr-sm-2">{props.children}</label>
			<TextField hiddenLabel size="small" placeholder={props.placeholder} />
		</Stack>
	);
};

export default BusquedaTextField;
